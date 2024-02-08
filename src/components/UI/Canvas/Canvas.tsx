import React, { useState, useRef, useEffect, createElement, ReactElement, MouseEvent } from 'react'
import './canvas.css'
import { IConfigState } from '../Properties/types'
import Moveable, { OnDrag, OnResize, OnRotate } from 'react-moveable'
import SideBar from '../SideBar/SideBar'
import { defaultConfigs } from '../Properties/constants'
import { getDiagramElement } from '../../DiagramCanvas/utils'
import TestElement from '../../DiagramCanvas/Elements/testElement'
import { ElementDataType } from '../../DiagramCanvas/Elements/types'

interface Props {
  
}

const Canvas = (props: Props) => {
  const [target, setTarget] = useState<any>(null)
  const [configs, setConfigs] = useState<IConfigState>(defaultConfigs)
  const [nodes, setNodes] = useState<ElementDataType[]>([])

  const canvasRef = useRef<HTMLHeadingElement>(null)
  
  const {gridActive, gridSize, gridSnap} = configs

  const bounds = { left: 0, right: canvasRef.current?.offsetWidth, top: 0, bottom: canvasRef.current?.offsetHeight}


  const handleChangeConfigs = (name:string, value: boolean | string | number) => {
    setConfigs({...configs, [name]: value})
  }

  const handleDrag = ({target, transform, translate, right, bottom, beforeTranslate, clientX, clientY}: OnDrag) => {
    target!.style.transform = transform
  }
  
  const handleResize = ({target, width, height, delta, transform}: OnResize) => {
    delta[0] && (target!.style.width = `${width}px`)
    delta[1] && (target!.style.height = `${height}px`)
    target!.style.transform = transform;
  }
  
  const handleRotate = ({target, transform}: OnRotate) => {
    target!.style.transform = transform;
  }

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const {currentTarget} = event
    setTarget(currentTarget)
  }
  
  const handleDropElement = (e:React.DragEvent<HTMLDivElement>) => {
    const {dataTransfer} = e
    const data: ElementDataType = JSON.parse(JSON.parse(dataTransfer.getData('node')))
    
    let updateNodes = [...nodes]
    
    updateNodes.push(data)
    setNodes(updateNodes)    
  }

  const handleRemove = (e:React.MouseEvent<HTMLElement>) => {
      if(target == null) {
        let toRemove = e.currentTarget.closest('.selectable')
        if(toRemove){
          toRemove.remove()
        }
      } else {
        target.remove()
      }
      setTarget(null)
  }

  const handleUpdateNode = () => {
    // TODO: Handle updating node with new values
  }
  
  const renderNodes = (nodes:ElementDataType[]) => {
    return (
      <>
      {
        nodes.map(node => {
          return getDiagramElement(node, handleSelect, handleRemove)
        })
      }
      </>
    )
  }

  return (
    <>
      <div
        onDragOver={(e) => {
          e.stopPropagation()
          e.preventDefault()}}
        onDrop={handleDropElement}
        onClick={(e) => {setTarget(null)}}
        ref={canvasRef} className={`canvas ${gridActive ? 'grid-active' : ''}`} style={{backgroundSize:`${gridSize}px ${gridSize}px`}}>
          <Moveable
            resizable
            draggable
            rotatable
            snappable
            snapGridHeight={gridSnap ? gridSize : 0} snapGridWidth={gridSnap ? gridSize : 0} target={target} bounds={bounds}
            onDrag={handleDrag}
            onResize={handleResize}
            onRotate={handleRotate}
            snapContainer={canvasRef}/>

          {
            renderNodes(nodes)
          }
      </div>
      <SideBar configs={configs} handleChangeConfigs={handleChangeConfigs}/>
    </>
  )
}

export default Canvas
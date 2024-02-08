import React, { DragEventHandler, ReactText, DragEvent, useState, useRef, useEffect, CSSProperties, MouseEventHandler } from 'react'
import './canvas.css'
import { IConfigState } from '../Properties/types'
import Draggable from 'react-draggable'
import Moveable, { OnDrag, OnResize, OnRotate } from 'react-moveable'

interface Props {
  configs: IConfigState
}

const Canvas = (props: Props) => {
  const [target, setTarget] = useState<any>()
  const canvasRef = useRef<HTMLHeadingElement>(null)
  
  const {gridActive, gridSize, gridSnap} = props.configs

  const handleDrag = ({target, transform}: OnDrag) => {
    target!.style.transform = transform;
  }
  
  const handleResize = ({target, width, height, delta}: OnResize) => {
    delta[0] && (target!.style.width = `${width}px`)
    delta[1] && (target!.style.height = `${height}px`)
  }
  
  const handleRotate = ({target, transform}: OnRotate) => {
    target!.style.transform = transform;
  }

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const {currentTarget} = event
    setTarget(currentTarget)
  }

  const bounds = { left: 0, right: canvasRef.current?.offsetWidth, top: 0, bottom: canvasRef.current?.offsetHeight}

 
  return (
    <div
      onClick={() => setTarget(null)}
      ref={canvasRef} className='canvas' style={{
      userSelect: 'none',
      backgroundImage:`${
        gridActive ? 
        'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
        :
        ''
      }
      `,
      backgroundRepeat:'repeat',
      backgroundSize:`${gridSize}px ${gridSize}px`,
      backgroundPositionX:0,
      backgroundPositionY:0
      }}>
        <Moveable resizable draggable rotatable snappable={gridSnap} snapGridHeight={gridSize} snapGridWidth={gridSize} target={target} bounds={bounds}
        onDrag={handleDrag}
        onResize={handleResize}
        onRotate={handleRotate}
        snapContainer={canvasRef}
        >
          
        </Moveable>
        <div onClick={handleSelect} className='selectable' style={{width:'100px', height:'400px', border:'1px solid white', padding:5}}>
            <div style={{backgroundColor:'white', width:'100%', textAlign:'center'}} className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
        </div>
        {/* <div 
          draggable
          onDragStart={(event) => event.dataTransfer.setDragImage(new Image(), 0, 0)}
          onDrag={handleDrag}
          style={handleStyle}
          ref={handleRef}
          >

            <div ref={blockRef} style={blockStyle}>

            </div>
        </div> */}

      {/* <Draggable
        
        // handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        bounds='parent'
        grid={gridSnap ? [gridSize, gridSize] : undefined}
        scale={1}
        >
        <div style={{width:100, height:400, border:'1px solid white', padding:5}}>
          <div style={{backgroundColor:'white', width:90, textAlign:'center'}} className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable> */}

    </div>
  )
}

export default Canvas
import React, { MouseEventHandler } from 'react'
import { DiagramElementType, ElementDataType } from './types'

interface Props extends DiagramElementType {
}

const TestElement = (props: Props) => {
  const { width, height, title } = props.node
  return (
    <div onClick={props.handleSelect} className='selectable' style={{width:width, height:height, border:'1px solid white', padding:5, position:'absolute'}}>
        <button onClick={(e) => props.handleRemove(e)}>X</button>
        <div style={{backgroundColor:'white', width:'100%', textAlign:'center'}} className="handle">{props.node.title}</div>
        <div style={{color:'var(--primary-text-color)'}}>This readme is really dragging on...</div>
    </div>
  )
}

export default TestElement
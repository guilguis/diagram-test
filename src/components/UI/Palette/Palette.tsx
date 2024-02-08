import React, { DragEvent } from 'react'
import './palette.css'
import { ElementDataType } from '../../DiagramCanvas/Elements/types'
import { ImgCardNode, TestElementNode, TextInputNode } from '../../DiagramCanvas/Elements/constants'

interface Props {
    
}

const Palette = (props: Props) => {

  const handleDrag = (e:DragEvent) => {
    let elementNode = e.currentTarget.getAttribute('data-node')
    
    e.dataTransfer.setData('node', elementNode ? JSON.stringify(elementNode) : '')
  }

  return (
    <div  className='palette'>
      <div draggable data-node={JSON.stringify(ImgCardNode)} onDragStart={handleDrag} className='element-selector'> <span> Image Card </span></div>
      <div draggable data-node={JSON.stringify(TextInputNode)} onDragStart={handleDrag} className='element-selector'> <span> Text Input </span></div>
    </div>
  )
}

export default Palette
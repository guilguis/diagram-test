import React from 'react'
import { DiagramElementType } from '../types'
import './TextElementInput.css'

interface Props extends DiagramElementType {

}

const TextInputElement = (props: Props) => {
  const { width, height} = props.node

  return (
    <div onClick={props.handleSelect} className='selectable' style={{width:width, height:height}}>
        <div className='input-wrapper'>
            <button className='remove-btn' onClick={(e) => props.handleRemove(e)}>X</button>
            <textarea className='element-input'></textarea>
        </div>
    </div>
  )
}

export default TextInputElement
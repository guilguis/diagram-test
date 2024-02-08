import React from 'react'
import { DiagramElementType } from '../types'

import './ImgCard.css'

interface Props extends DiagramElementType {

}

const ImgCard = (props: Props) => {
  const { width, height, title, imgSrc } = props.node

  return (
    <div onClick={props.handleSelect} className='selectable' style={{width:width, height:height}}>
        <div className='img-card'>
            <button className='remove-btn' onClick={(e) => props.handleRemove(e)}> X </button>
            <div className="handle">{title}</div>
            <img draggable={false} className='img' src={imgSrc} />
        </div>
    </div>
  )
}

export default ImgCard
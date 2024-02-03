import React from 'react'
import './properties.css'

interface Props {
    
}

const Properties = (props: Props) => {
  return (
    <div className='properties-bar'>
      <div className='property'>
        <label className='primary-text-color label'> Diagram Name: </label>
        <input type='text' placeholder='Insert a name' />
      </div>
      <div className='property'>
        <label className='primary-text-color label'> Diagram Size: </label>
        <div className='input-wrapper multi-input'>
          <span className='basic-color'> Width: </span>
          <input type='range'/>
          <input type='number' />
        </div>
        <div className='input-wrapper multi-input'>
          <span className='basic-color'> Height: </span>
          <input type='range'/>
          <input type='number' />
        </div>
      </div>
      <div className='property'>
        <div className='input-wrapper inline'>
          <input type='checkbox' placeholder='Insert a name' />
          <label className='primary-text-color label'> Toggle Grid </label>
        </div>
      </div>
      <div className='property'>
        <span className='primary-text-color label'> Grid Size: </span>
        <div className='input-wrapper multi-input'>
          <input type='range'/>
          <input type='number' />
        </div>
      </div>
    </div>
  )
}

export default Properties
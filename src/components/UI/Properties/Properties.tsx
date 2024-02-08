import React from 'react'
import './properties.css'
import { IConfigState } from './types'

interface Props {
  handleChangeConfigs: Function
  configs: IConfigState
}

const Properties = (props: Props) => {
  
  return (
    <div className='properties-bar'>
      <div className='property'>
        <label className='primary-text-color label'> Diagram Name: </label>
        <input name='canvasName' value={props.configs.canvasName} type='text' onChange={({target}) => props.handleChangeConfigs(target.name, target.value)} placeholder='Insert a name' />
      </div>
      <div className='property'>
        <label className='primary-text-color label'> Diagram Size: </label>
        <div className='input-wrapper multi-input'>
          <span className='basic-color'> Width: </span>
          <input name='canvasWidth' value={props.configs.canvasWidth} onChange={({target}) => props.handleChangeConfigs(target.name, parseInt(target.value))} type='number' />
        </div>
        <div className='input-wrapper multi-input'>
          <span className='basic-color'> Height: </span>
          <input name='canvasHeight' value={props.configs.canvasHeight} onChange={({target}) => props.handleChangeConfigs(target.name, parseInt(target.value))} type='number' />
        </div>
      </div>
      <div className='property'>
        <div className='input-wrapper '>
          <label className='primary-text-color inline'>
            <input name='gridActive' checked={props.configs.gridActive} onChange={({target}) => props.handleChangeConfigs(target.name, target.checked)} type='checkbox' placeholder='Insert a name' />
            Toggle Grid 
          </label>
        </div>
      </div>
      <div className='property'>
        <div className='input-wrapper '>
          <label className='primary-text-color inline'>
            <input name='gridSnap' checked={props.configs.gridSnap} onChange={({target}) => props.handleChangeConfigs(target.name, target.checked)} type='checkbox' placeholder='Insert a name' />
            Snap to grid
          </label>
        </div>
      </div>
      <div className='property'>
        <span className='primary-text-color label'> Grid Size: </span>
        <div className='input-wrapper multi-input'>
          <input name='gridSize' value={props.configs.gridSize} min={15} max={50} step={5} onChange={({target}) => props.handleChangeConfigs(target.name, parseInt(target.value))} type='range'/>
          <input name='gridSize' value={props.configs.gridSize} min={15} max={50} step={5} onChange={({target}) => props.handleChangeConfigs(target.name, parseInt(target.value))} type='number' />
        </div>
      </div>
    </div>
  )
}

export default Properties
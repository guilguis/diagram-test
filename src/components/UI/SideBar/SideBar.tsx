import React, { useState } from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Properties from '../Properties/Properties'
import Palette from '../Palette/Palette'
import { CANVAS_INDEX, PALETTE_INDEX } from './constants'
import { IConfigState } from '../Properties/types'

interface Props {
  handleChangeConfigs: Function
  configs: IConfigState
}

const SideBar = (props: Props) => {
  const [hidden, setHidden] = useState(false)
  const [activeTab, setActiveTab] = useState(CANVAS_INDEX)

  const toggleVisible = () => {
    setHidden(!hidden)
  }

  return (
    <div className={`sidebar ${hidden ? 'hidden' : ''}`}>
        <button className='toggle-btn secondary-btn' onClick={() => toggleVisible()}> <FontAwesomeIcon className='primary-text-color' icon={faBars}/> </button>
        <div className='tab-menu'>
            <button className='tab-btn primary-btn' onClick={() => setActiveTab(CANVAS_INDEX)}> Properties </button>
            <button className='tab-btn primary-btn' onClick={() => setActiveTab(PALETTE_INDEX)}> Palette </button>
        </div>
        <div className='panel'>
            {
                activeTab === CANVAS_INDEX &&
                <Properties configs={props.configs} handleChangeConfigs={props.handleChangeConfigs} />
            }
            {
                activeTab === PALETTE_INDEX &&
                <Palette />
            }
        </div>
    </div>
  )
}

export default SideBar
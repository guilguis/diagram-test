import React from 'react'
import './topbar.css'

interface Props {

}

const TopBar = (props: Props) => {
  return (
    <div className='topbar'>
        <div className='title primary-text-color'>Diagrammer</div>
        <div className='actions'>
            <button className='primary-btn'>Save</button>
            <button className='primary-btn'>Load</button>
        </div>
    </div>
  )
}

export default TopBar
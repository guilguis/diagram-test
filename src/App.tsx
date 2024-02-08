import React, { useState } from 'react';
import logo from './logo.svg';
import './static/App.css';

import Canvas from './components/UI/Canvas/Canvas';
import SideBar from './components/UI/SideBar/SideBar';
import TopBar from './components/UI/TopBar/TopBar';
import { IConfigState } from './components/UI/Properties/types';
import { defaultConfigs } from './components/UI/Properties/constants';

function App() {
  const [configs, setConfigs] = useState<IConfigState>(defaultConfigs)

  const handleChangeConfigs = (name:string, value: boolean | string | number) => {
    console.log('name', name);
    console.log('value', value);
    setConfigs({...configs, [name]: value})
  }
  return (


    <div className="App">
      <div>
        <TopBar />
      </div>
      <div className='content-wrapper'>
        <Canvas configs={configs} />
        <SideBar configs={configs} handleChangeConfigs={handleChangeConfigs} />
      </div>
    </div>
  );
}

export default App;

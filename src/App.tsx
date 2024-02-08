import React, { useState } from 'react';
import './static/App.css';

import Canvas from './components/UI/Canvas/Canvas';
import SideBar from './components/UI/SideBar/SideBar';
import TopBar from './components/UI/TopBar/TopBar';
import { IConfigState } from './components/UI/Properties/types';
import { defaultConfigs } from './components/UI/Properties/constants';

function App() {


  return (


    <div className="App">
      <div>
        <TopBar />
      </div>
      <div className='content-wrapper'>
        <Canvas/>
      </div>
    </div>
  );
}

export default App;

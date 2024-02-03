import React from 'react';
import logo from './logo.svg';
import './static/App.css';

import Canvas from './components/UI/Canvas/Canvas';
import SideBar from './components/UI/SideBar/SideBar';
import TopBar from './components/UI/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <div>
        <TopBar />
      </div>
      <div className='content-wrapper'>
        <Canvas />
        <SideBar />
      </div>
    </div>
  );
}

export default App;

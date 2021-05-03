import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import NavBar from './NavBar';
import About from './About';
import Program from './Program';
import Credits from "./Credits";
import './App.css';

function App() {
  const appRef = React.createRef();

  const onNavClick = (target) => {
    const targetTop = appRef.current?.querySelector(target).offsetTop;
    const navOffset = appRef.current?.querySelector('nav').offsetHeight;
    if (appRef.current)
      appRef.current.parentElement.scrollTop = targetTop - navOffset;
  }

  return (
    <div ref={appRef} className='app' id='home'>
      <NavBar onNavClick={onNavClick}></NavBar>
      <div className='content'>
        {/* twitch video */}
        <ReactTwitchEmbedVideo targetClass='section-twitch' channel='lipp_tv_' layout='video' width='95%'></ReactTwitchEmbedVideo>
        {/* about */}
        <About></About>
        {/* program */}
        <Program></Program>
        {/* credits */}
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;

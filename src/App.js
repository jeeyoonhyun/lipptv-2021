import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import NavBar from './NavBar';
import './App.css';

function App() {
  const width = window.innerWidth * 0.8 * 0.8;
  return (
    <div className='app'>
      <NavBar></NavBar>
      <div className='content'>
        <div className='section-head' id='watch'>LIVE NOW!</div>
        <ReactTwitchEmbedVideo targetClass='section-body' channel='lipp_tv_' width={width}></ReactTwitchEmbedVideo>
        <div className='section-head' id='about'>What's LIPP TV?</div>
        <div className='section-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className='section-head' id='program'>OUR PROGRAM</div>
        <div className='section-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className='section-head' id='credit'>LIPP TV CREDITS</div>
        <div className='section-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  );
}

export default App;

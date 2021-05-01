import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import NavBar from './NavBar';
import About from './About';
import Program from './Program';
import Credits from "./Credits";
import './App.css';

function App() {
  return (
    <div className='app' id='home'>
      <NavBar></NavBar>
      <div className='content block'>
        {/* twitch video */}
        {/* <ReactTwitchEmbedVideo targetClass='section-twitch' channel='lipp_tv_' layout='video' width='100%' height='500px'></ReactTwitchEmbedVideo> */}
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

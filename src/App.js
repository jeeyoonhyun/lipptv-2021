import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import NavBar from './NavBar';
import About from './About';
import Program from './Program';
import './App.css';

function App() {
  const width = window.innerWidth * 0.8 * 0.8;
  return (
    <div className='app' id='home'>
      <NavBar>

      </NavBar>
      <div className='content block'>
        {/* twitch video */}
        <ReactTwitchEmbedVideo targetClass='section-twitch' channel='lipp_tv_' layout='video' width='100%' height='500px'></ReactTwitchEmbedVideo>
        {/* about */}
        <About></About>
        {/* program */}
        <Program></Program>
        
        
        

       
        {/* credits */}
        <div className='section-head' id='credits'>LIPP TV CREDITS</div>
        <div className='section-headline' id='credits-information'>MEET LIPP TV’S PRODUCTION TEAM, THIS PROJECT WAS MADE POSSIBLE BY THE FOLLOWING PEOPLE</div>
        <div className='section-body' id='credits-column-1'>
          <div className='credits-individual'>MATT ROMEIN
            EXECUTIVE PRODUCER & HOST</div>

          <div className='credits-individual'>CARRIE WANG
            CREATIVE DIRECTOR</div>

          <div className='credits-individual'>CEZAR MOCAN
            WEB DEVELOPER</div>

          <div className='credits-individual'>CHRISTINA DACANAY
            GRAPHICS AND ANIMATION</div>

          <div className='credits-individual'>CAREN YE
            GRAPHICS & ANIMATION</div>

          <div className='credits-individual'>AIDAN FOWLER
            GRAPHICS & ANIMATION</div>
          <div className='credits-individual'>NIKHIL KUMAR
            MUSIC</div>
        </div>
        <div className='section-body' id='credits-column-2'>
          <div className='credits-individual'>SYLVAN ZHENG
            MUSIC</div>

          <div className='credits-individual'>SACHIKO NAKAJIMA
            MUSIC</div>

          <div className='credits-individual'>BRENT BAILEY
            HEAD OF ADVERTISING</div>

          <div className='credits-individual'>CARRIE WANG
            STAGE MANAGER</div>

          <div className='credits-individual'>GABRIELLA GARCIA
            BACKSTAGE ASSISTANT</div>
        </div>
        <div className='section-body' id='credits-column-3'>
          <div className='credits-individual'>SPECIAL THANKS TO CULTUREHUB, 
          YOTAM MANN AND LYDIA JESSUP.
          LIPP TV IS PRESENTED IN COLLABORATION 
          WITH CULTUREHUB</div>
          <div id='culturehub'>culturehub logo</div>
        </div>
      </div>
    </div>
  );
}

export default App;

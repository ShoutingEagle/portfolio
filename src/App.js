import React, { useEffect, useState } from 'react';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import AboutAndSkillSection from './components/AboutAndSkillSection';

import './App.css'
import EndSection from './components/EndSection';
import EndRibbon from './components/EndRibbon';

function App() {
  const [screenSize,setScreenSize] = useState(1920)
  useEffect(() => {

    function handleResizeScreen () {
      setScreenSize(window.innerWidth)
    }
    
    
    window.addEventListener('resize',handleResizeScreen)

    return () => {
      window.removeEventListener('resize',handleResizeScreen)
    }
  },[screenSize])
  return (
    <div className='bg-minimalistic-bg '>
      <LandingSection/>
      {screenSize < 1024 ? <AboutAndSkillSection/> : null}
      <ProjectSection/>
      <EndSection/>
      <EndRibbon/>
    </div>
  );
}

export default App;
































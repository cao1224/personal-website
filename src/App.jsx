import {useRef, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import About from '../src/sections/about/About';
import Projects from '../src/sections/projects/Projects';
import Gallery from '../src/sections/gallery/Gallery';



function App() {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  const floatingNavToggleHandler = () => {

    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    return () => clearInterval(checkYPosition);
  }, [siteYPostion])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App

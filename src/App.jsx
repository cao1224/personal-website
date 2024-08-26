import {useRef, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import About from '../src/sections/about/About';

import Projects from '../src/sections/projects/Projects';
import GalacticDreamscape from '../src/sections/projects/artworks/GalacticDreamscape.jsx';
import BionicBalance from '../src/sections/projects/artworks/BionicBalance.jsx';
import Hues from '../src/sections/projects/artworks/Hues.jsx';
import LivingOnEdge from '../src/sections/projects/artworks/LivingOnEdge.jsx';

import Gallery from '../src/sections/gallery/Gallery';
import GallerySinglePage from '../src/components/GallerySinglePage.jsx';

import Footer from '../src/sections/footer/Footer';


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
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/artworks/GalacticDreamscape' element={<GalacticDreamscape/>}/>
            <Route path='/artworks/BionicBalance' element={<BionicBalance/>}/>
            <Route path='/artworks/Hues' element={<Hues />}/>
            <Route path='/artworks/LivingOnEdge' element={<LivingOnEdge />}/>

            <Route path="/gallery/:title" element={<GallerySinglePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App

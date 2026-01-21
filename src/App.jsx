import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UnlockSkills from './components/UnlockSkills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import './index.css';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="App">
          <Background3D />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <UnlockSkills />
                  <Projects />
                  <Achievements />
                  <Contact />
                </>
              } />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;

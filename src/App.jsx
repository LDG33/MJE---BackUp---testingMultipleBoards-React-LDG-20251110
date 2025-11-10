import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import About from './pages/About';
import PlayMoods from './gameboards/PlayMoods';
import PlayVegetables from './gameboards/PlayVegetables';
import Next1 from './gameboards/Next1';
import Next2 from './gameboards/Next2';

{/* <Link to="/about">Go to About</Link> */}


function App() {
  const [count, setCount] = useState(0);
  



  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/playmoods" element={<PlayMoods />} />
        <Route path="/playvegetables" element={<PlayVegetables />} />
        <Route path="/next1" element={<Next1 />} />
        <Route path="/next2" element={<Next2 />} />
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App

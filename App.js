import React from 'react';
import './index.css';
// import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About'
import Project from './routes/Project'
import Contect from './routes/Contect'

function App() {
  return (
    <>
      <Home />
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

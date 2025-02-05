
/*import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';

function App() {
  

  return (
    <>
    <Header /> 
    <Home /> 
    <MainBrands /> 
    </>
  )
}

export default App*/


/*import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main-brands" element={<MainBrands />} />
            </Routes>
        </Router>
    );
}

export default App;



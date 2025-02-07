import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';

function App() {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main-brands" element={<MainBrands />} />
            </Routes>
        </Router>
    );
}

export default App;

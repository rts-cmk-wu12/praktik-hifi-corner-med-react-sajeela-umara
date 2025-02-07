import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';
import Products from './pages/products';
import Frontpage from './pages/shop-frontpage';
import Footer from './components/Footer'

function App() {
    return (
        <Router>
           
            <Routes>
            <Route path="/" element={<Frontpage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/main-brands" element={<MainBrands />} />
                <Route path="/products" element={<Products />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

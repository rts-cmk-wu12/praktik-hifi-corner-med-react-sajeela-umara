/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';
import Products from './pages/products';
import Frontpage from './pages/shop-frontpage';
import Footer from './components/Footer';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
           
            <Routes>
            <Route path="/home" element={<Home />} />
                <Route path="/shop-frontpage" element={<Frontpage />} />
                <Route path="/main-brands" element={<MainBrands />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MainBrands from './pages/MainBrands';
import Products from './pages/products';
import Frontpage from './pages/shop-frontpage';
import Footer from './components/Footer';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop-frontpage" element={<Frontpage />} />
                <Route path="/main-brands" element={<MainBrands />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

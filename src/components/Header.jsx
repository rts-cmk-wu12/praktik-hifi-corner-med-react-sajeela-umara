
import React from 'react';
import { Link } from 'react-router-dom';
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { PiEnvelopeSimpleLight } from "react-icons/pi";


const Header = () => (
    <header>
        <div className="headeritems">
        <ul className="headeritems1__list">
        <li className="header__item1 header__item--last"><LuMapPin  size={30}/></li>
        <li className="header__item1 header__item--last"><BsTelephone  size={30}/></li>
        <li className="header__item1 header__item--last"><BsEnvelope size={30} /></li>
        <li className="header__item1 header__item--last1"> <PiEnvelopeSimpleLight />Subscribe</li>
        </ul>
    </div>

    <nav>
        <ul className="menu">
        <li className="menu__item"><Link className="menu__link" to="/">HOME</Link></li>
                    
                
        <li className="menu__item"><a className="menu__link" href="#">ABOUT US</a></li>
        <li className="menu__item"><Link className="menu__link" to="/main-brands">Main Brands</Link></li>
                    
                
        <li className="menu__item"><a className="menu__link" href="#">BLOG</a></li>
        <li className="menu__item"><a className="menu__link" href="#">EVENTS</a></li>
        <li className="menu__item"><a className="menu__link" href="shop-frontpage.html">SHOP</a></li>
        <li className="menu__item"><a className="menu__link" href="#">CONTACT US</a></li>

        </ul>
    </nav>
    </header>
);

export default Header;
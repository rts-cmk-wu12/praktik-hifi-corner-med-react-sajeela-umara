

import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

import '../style/header.scss'

const Header3 = () => {
    const navigate = useNavigate();
    

    return (
    <header>
        <div className="headeritems2">
        
        <ul className="headeritems1__list" >
        
        
       

        <li className="header__item2 header__item--last"><LuMapPin  size={30}/></li>
        <li className="header__item2 header__item--last"><BsTelephone  size={30}/></li>
        <li className="header__item2 header__item--last"><BsEnvelope size={30} /></li>
        
        </ul>
        <hr className="header_line"></hr>
    </div>

    <nav>
        <ul className="menu">
        <li className="menu__item"><Link className="menu__link" to="/">HOME</Link></li>
                    
                
        <li className="menu__item"><a className="menu__link" href="#">ABOUT US</a></li>
        <li className="menu__item"><Link className="menu__link" to="/main-brands">Main Brands</Link></li>
                    
                
        <li className="menu__item"><a className="menu__link" href="#">BLOG</a></li>
        <li className="menu__item"><a className="menu__link" href="#">EVENTS</a></li>
        <li className="menu__item"><span className="menu__link" onClick={() => navigate('/shop-frontpage')}>SHOP</span></li>
        <li className="menu__item"><span className="menu__link" onClick={() => navigate('/shoppingCart')}>CONTACT US</span></li>

        </ul>
    </nav>
    </header>
);
};


export default Header3;
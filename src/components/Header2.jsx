
import React from 'react';
import { Link } from 'react-router-dom';
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { MdSupervisorAccount } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import '../style/header.scss'


const Header2 = ({ cartCount }) => {
    const navigate = useNavigate();

    return (
    <header>
        <div className="headeritems2">
        
        <ul className="headeritems1__list" >
        <img className="headeritems1_logo" src="images/logo/logo_sml.gif" alt="logo"/>
        <form className="headeritems1__form">
                <input className="headeritems__input" type="search" placeholder="Search entire store here...." id="product-search-input" />
                <i className="fas fa-search"></i>
            </form>
        
        <li className="header__item2 header__item--last"><MdSupervisorAccount size={30}/>ACCOUNT</li>
        <li className="header__item2 header__item--last" onClick={() => navigate('/cart')}>
            <TiShoppingCart size={30} className="cart-icon" /> CART
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </li>

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


export default Header2;
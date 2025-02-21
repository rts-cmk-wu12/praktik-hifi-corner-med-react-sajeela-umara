

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../style/cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    const cartData = [];
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const productName = localStorage.key(i);
      const productInfo = JSON.parse(localStorage.getItem(productName));
      cartData.push({ name: productName, ...productInfo });
      total += productInfo.price * productInfo.quantity;
    }
    setCartItems(cartData);
    setTotalPrice(total);
  };

  const removeFromCart = (productName) => {
    localStorage.removeItem(productName);
    loadCartItems(); // Reload the cart items after deletion
  };

  return (
    <>
    <Header />
    <div className="cart-products-wrapper">
      <section className="products-cart-main" id="products-main">
        <h1 className="products-cart-main__heading">Your Cart</h1>
        {cartItems.map((item, index) => (
          <article className="product" key={index}>
            <img src={item.image} alt={item.name} className="product__image" />
            <div className="product-info">
              <div className="product-cart-top-details">
                <a href={`details.html?product=${item.name}`} className="product__name">{item.name}</a>
                
              </div>
              <div className="product-cart-details">
                <p className="product__price">£{item.price}</p>
                <p className="product__quantity">Qty: {item.quantity}</p>
                <button className="remove-product" onClick={() => removeFromCart(item.name)}>
                  Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="cart-information">
        <div className="cart-information__pricing">
          <p className="cart-information__total">Total Price:</p>
          <div className="cart-information__currency">
            <p className="cart-information__total-price">£</p>
            <p className="cart-information__total-price" id="cart-information__total-price">{totalPrice}</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Cart;

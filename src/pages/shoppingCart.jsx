
import React, { useState } from "react";
import "../style/shoppingCart.css";
import Header2 from '../components/Header2';

const ShoppingCart = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    validUntil: "",
    cvv: "",
    cardHolder: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <Header2/>
    <div className="cart__container-pay-wrapper">
      <div className="cart__container-pay-container">
        <form action="payInfo" className="cart__form" id="form" onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="inputInfo"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onKeyDown={(e) => /[a-zA-Z]/.test(e.key)}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="inputInfo"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onKeyDown={(e) => /[a-zA-Z]/.test(e.key)}
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="inputInfo"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            className="inputInfo"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="city">Town/City</label>
          <input
            type="text"
            className="inputInfo"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            onKeyDown={(e) => /[a-zA-Z]/.test(e.key)}
            required
          />

          <label htmlFor="email">e-mail</label>
          <input
            type="email"
            className="inputInfo"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            className="inputInfo"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onKeyDown={(e) => /[0-9]/.test(e.key)}
            required
          />

          <button className="cart__container-pay-container-button">Sing-in First</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;


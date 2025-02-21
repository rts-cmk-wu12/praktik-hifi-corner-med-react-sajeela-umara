/*import React, { useState } from "react";
import "../style/shoppingCart.css"
const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="cart__container">
      <div className="cart__container-items__list-wrapper">
        <div className="items__container" id="items__container">
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>

        <div className="cart__container-items__list-total__price__container">
          <p>Total</p>
          <div className="price__and__icon">
            <p>£</p>
            <p id="total__price">{totalPrice}</p>
          </div>
        </div>
      </div>

      <div className="cart__container-pay-wrapper">
        <div className="cart__container-pay-container">
          <form action="payInfo" className="cart__form" id="form" onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="inputInfo" required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="inputInfo" required />

            <label htmlFor="address">Address</label>
            <input type="text" className="inputInfo" required />

            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" className="inputInfo" required />

            <label htmlFor="city">Town/City</label>
            <input type="text" className="inputInfo" required />

            <label htmlFor="email">e-mail</label>
            <input type="email" className="inputInfo" required />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" className="inputInfo" required />

            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" className="inputInfo" maxLength="16" placeholder="**** **** **** ****" required />

            <label htmlFor="validUntil">Valid Until</label>
            <input type="text" className="inputInfo" placeholder="Month/Year" required />

            <label htmlFor="cvv">CVV</label>
            <input type="text" className="inputInfo" placeholder="***" required />

            <label htmlFor="cardHolder">Card Holder</label>
            <input type="text" className="inputInfo" placeholder="Name and Surname on card" required />

            <button className="cart__container-pay-container-button">Buy</button>
          </form>
        </div>
      </div>

      <dialog id="dialog" className="dialog">
        <div className="dialog__wrapper">
          <p>Thank you for your purchase</p>
        </div>
      </dialog>
    </div>
  );
};

export default ShoppingCart;*/
import React, { useState } from "react";
import "../style/shoppingCart.css";

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

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="inputInfo"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            maxLength="16"
            placeholder="**** **** **** ****"
            required
          />

          <label htmlFor="validUntil">Valid Until</label>
          <input
            type="text"
            className="inputInfo"
            name="validUntil"
            value={formData.validUntil}
            onChange={handleInputChange}
            placeholder="Month/Year"
            required
          />

          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            className="inputInfo"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="***"
            required
          />

          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            className="inputInfo"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
            onKeyDown={(e) => /[a-zA-Z]/.test(e.key)}
            placeholder="Name and Surname on card"
            required
          />

          <button className="cart__container-pay-container-button">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;


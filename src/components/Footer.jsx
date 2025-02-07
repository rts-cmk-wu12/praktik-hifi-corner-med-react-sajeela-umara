import React from "react";
import '../style/footer.css';

const Footer = () => (
  <footer>
    <div className="footer__left">
      <div>
        <p>HI-Fi Corner</p>
        <p>Edinburg 2 Joppa Road EH15 2EU</p>
        <p>Falkrik 14 Cow Wynd FK1 1PU</p>
      </div>
      <div className="footer__link">
        <a className="border-right" href="">
          Returns & Refunds
        </a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
    <div className="footer__right">
      <div className="footer__payment-icons-container">
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-paypal"></i>
        <i className="fa-brands fa-cc-visa"></i>
      </div>
      <div className="footer__social-icons-container">
        <div className="footer__social-icon">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="footer__social-icon">
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="footer__social-icon">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="footer__social-icon">
          <i className="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

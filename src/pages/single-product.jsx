

import React from 'react';
import { useLocation } from 'react-router-dom';
import Header2 from '../components/Header2';
import '../style/single-product.css';

const SingleProduct = () => {
    const { state } = useLocation();
    const { product } = state;

    return (
        <>
        <Header2  />
        <main id="single-produkt-main">
            <div className="main__wrapper">
                <p className="product-category-location" id="product-category-location">{product.category}</p>
                <img src="images/new.png" alt="sale" className="product_category_commersial-img" />
                <div className="single__produkt-left__container-all">
                    <div className="single__produkt-left">
                        <div className="single__produkt-left__container-image" id="image-product">
                            <img src={product.image} alt={product.product_name} />
                        </div>
                        <div className="single__produkt-left__container-images" id="container-images">
                            <p>MORE VIEWS</p>
                        </div>
                    </div>
                    <div className="single__produkt-right">
                        <p className="single__produkt-right__product-name" id="product-name">{product.product_name}</p>
                        <div className="single__produkt-right__product-price-wrapper">
                            <p className="single__produkt-right__product-brand" id="product-brand">{product.brand}</p>
                            <p className="single__produkt-right__product-price" id="product-price">£{product.price}</p>
                        </div>
                        <p className="single__produkt-right__product-description" id="product-description">{product.description}</p>
                        <div className="single__produkt-right__contaioner-buttons">
                            <button>ASK A QUESTION</button>
                            <button>PART EXCHANGE</button>
                            <button>PAY BY FINANCE</button>
                            <button>SEEN A BETTER PRICE?</button>
                        </div>
                        <div className="single__produkt-right__contaioner-finish" id="contaioner-finish"></div>
                        <div className="single__produkt-right__contaioner-add_to_cart">
                            <div className="single__produkt-right__contaioner-add_to_cart-wrapper">
                                <div>
                                    <label htmlFor="number" className="single__produkt-right__contaioner-add_to_cart-number__label">Qty:</label>
                                    <input type="number" className="single__produkt-right__contaioner-add_to_cart-number__input" value="1" min="1" max="9" />
                                </div>
                                <div className="single__produkt-right__contaioner-add_to_cart__or">
                                    <button className="single__produkt-right__contaioner-add_to_cart__button" id="add_to_cart__button">ADD TO CART</button>
                                    <p className="single__produkt-right__or-p">-OR-</p>
                                    <a href="#" className="single__produkt-right__or-a" id="check-out">
                                        <img src="images/paypal.png.png" alt="paypal" />
                                        Check Out
                                    </a>
                                    <p className="single__produkt-right__or-p__small">The safer, easier way to pay</p>
                                </div>
                            </div>
                        </div>
                        <table className="single__produkt-right__table-additional_information ">
                            <caption>ADDITIONAL INFORMATION</caption>
                            <tbody className="single__produkt-right__table-tbody">
                                <tr>
                                    <th scope="row">Manufacturer</th>
                                    <td id="table_td-manufacture">{product.manufacturer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Manufacturer link</th>
                                    <td id="table_td-manufacture-link"><a href={product.manufacturer_link}>Link</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">FREE WARRANTY</th>
                                    <td>3 Years</td>
                                </tr>
                                <tr>
                                    <th scope="row">DELIVERY CHARGE</th>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <th scope="row">DELIVERY TIME</th>
                                    <td>1 - 5 Working days</td>
                                </tr>
                                <tr>
                                    <th scope="row">CARD SURCHARGES</th>
                                    <td>No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="single__produkt-left__description">
                    <table>
                        <caption className="single__produkt-left__description-caption">Description</caption>
                        <tbody className="single__produkt-left__description-table">
                            <tr>
                                <th scope="row">Power Output (8 / 4 Ohm RMS)</th>
                                <td>45 w / 60 w 10 Hz</td>
                            </tr>
                            <tr>
                                <th scope="row">Frequency Response</th>
                                <td>70 kHz</td>
                            </tr>
                            <tr>
                                <th scope="row">Total Harmonic Distortion</th>
                                <td>0.08%</td>
                            </tr>
                            <tr>
                                <th scope="row">Damping Factor</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th scope="row">Input Sensitivity: mm</th>
                                <td>2.2 mV / 47 kOhm</td>
                            </tr>
                            <tr>
                                <th scope="row">Input Sensitivity: mc</th>
                                <td>X</td>
                            </tr>
                            <tr>
                                <th scope="row">Signal to Noise Ratio: MM / MC</th>
                                <td>83 dB / X</td>
                            </tr>
                            <tr>
                                <th scope="row">Input Sensitivity: High level</th>
                                <td>200 mv / 20 kOhm</td>
                            </tr>
                            <tr>
                                <th scope="row">Input Sensitivity: Balanced high level</th>
                                <td>X</td>
                            </tr>
                            <tr>
                                <th scope="row">Signal to Noise Ratio: High level</th>
                                <td>102dB (2V input)</td>
                            </tr>
                            <tr>
                                <th scope="row">Input Sensitivity: Power Amp Direct IN</th>
                                <td>X</td>
                            </tr>
                            <tr>
                                <th scope="row">Signal to Noise Ratio: Power Amp Direct IN</th>
                                <td>X</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="single-produkt__call-wrapper">
                    <p>CALL US ABOUT THIS PRODUCT</p>
                </div>
            </div>
        </main>
        </>
    );
};

export default SingleProduct;

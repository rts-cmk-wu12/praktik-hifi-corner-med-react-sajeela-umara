
import React from 'react';

const MainBrands = () => {
    return (
        <main className="main-brands">
            <div className="grid-container-brands">
                <section className="top-brands">
                    <h1 className="top-brands-header">TOP BRANDS</h1>
                </section>
                <section className="hifi-logo-section">
                    <div className="hifi-logo">
                        <h1 className="hifi-logo-header">HI<br />F I</h1>
                    </div>
                    <div className="hifi-logo-link">
                        <p className="hifi-link-text">HIFICORNER.CO.UK</p>
                    </div>
                </section>
            </div>

            <div className="brands-container">
                <div className="grid-container-brands-logos">
                    <section className="stock-brands">
                        <p className="stock-brands-text">Here are just a few of the brands we stock:</p>
                        <img className="brands-image" src="images/logonobg.png" alt="Brands" />
                    </section>
                    <section className="brands-sub">
                        <div className="brands-div">
                            <div className="brands-info">
                                <h1 className="brands-sub-header">BRANDS</h1>
                                <p className="brands-sub-text">As an independent retailer of home audio and visual products we are able to select the very best brands and manufacturers from across the world.</p>
                                <p className="brands-sub-text">Not only do we have the best known brands such as B&W, Devialet, KEE, Naim, and Linn; we also stock and are well versed with smaller autonomous companies like Michell Engineering, Neat Acoustics, Harbeth, SME, Trichord Research, PrimaLuna, to name but a few.</p>
                                <p className="brands-sub-text">With over a hundred brands, we can happily say that if a brand meets our high standards for sound reproduction, then you can be assured to find it at Hi-Fi Corner.</p>
                                <a className="brands-sub-link" href="shop-frontpage.html">VISIT OUR SHOP TO FIND MORE BRANDS</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default MainBrands;


/*import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const changeSlide = (step) => {
        setCurrentIndex((prevIndex) => (prevIndex + step + products.length) % products.length);
    };

    return (
        <div className="App">
            
            <div>
                <img src="./pictures/hifi-logo1.png" alt="" />
                
                       
                
                    
                    
            </div>
            
            <section className="showroom">
                <div className="showroom_img">
                    <img src="./pictures/wavy_backgroung.jpg" alt="wavy" />
                </div>
                <div className="showroom_writing">
                    <p>OUR EDINBURGH SHOWROOM HAS NOW MOVED <br />TO STUNNING NEW PREMISES ON JOPPA ROAD</p>
                </div>
            </section>
            <div className="slider">
                <div className="slides">
                    {products.length > 0 && (
                        <div>
                            <img src={products[0].products[currentIndex].image} alt={products[0].products[currentIndex].product_name} />
                            <div className="product_name">{products[0].products[currentIndex].product_name}</div>
                        </div>
                    )}
                </div>
                <a className="prev" onClick={() => changeSlide(-1)}>❮</a>
                <a className="next" onClick={() => changeSlide(1)}>❯</a>
            </div>
            <section className="social-media">
                <a href="https://www.facebook.com">
                    <img src="./pictures/hi_fi_social_logo.png" alt="facebook" />
                </a>
                <a href="https://www.b.com">
                    <img src="./pictures/hifi-frontpage_logo4.png" alt="b" />
                </a>
                <a href="https://www.twitter.com">
                    <img src="./pictures/hifi-frontpage_logo9.png" alt="twitter" />
                </a>
            </section>
            <section className="info">
                <article>
                    <h1 className="info_heading">HISTORY</h1>
                    <p className="info_p">ESTABLISHED IN THE LATE 1960S, <br /> OUR FAMILY OWNED BUSINESS IS BASED IN <br />EDINBURGH AND FALKIRK SERVICING <br /> CUSTOMERS ACROSS THE UK.</p>
                </article>
                <article>
                    <h1 className="info_heading">NEWS</h1>
                    <p className="info_p">CHECK OUT OUR LATEST NEWS <br /> STORIES FOR ALL THE UP TO DATE HI- <br />FI CORNER PRODUCTS AND <br /> LAUNCHES.</p>
                </article>
                <article>
                    <h1 className="info_heading">SHOP</h1>
                    <p className="info_p">HAVE A LOOK IN OUR ONLINE SHOP <br /> FOR GREAT PRODUCTS AND DEALS.</p>
                </article>
            </section>
        </div>
    );
};

export default Home;*/





import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setProducts(data);
            })
            .catch(err => console.log(err));
    }, []);

    const changeSlide = (step) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + step;
            if (products.length > 0) {
                const length = products[0].products.length;
                if (newIndex < 0) {
                    return length - 1;
                } else if (newIndex >= length) {
                    return 0;
                }
            }
            return newIndex;
        });
    };

    return (
        <div className="App">
            
            <div>
                <img src="./pictures/hifi-logo1.png" alt="Hi-Fi Logo" />
            </div>
            
            <section className="showroom">
                <div className="showroom_img">
                    <img src="./pictures/wavy_backgroung.jpg" alt="wavy" />
                </div>
                <div className="showroom_writing">
                    <p>OUR EDINBURGH SHOWROOM HAS NOW MOVED <br />TO STUNNING NEW PREMISES ON JOPPA ROAD</p>
                </div>
            </section>
            
            <div className="slider">
                <div className="slides">
                    {products.length > 0 && (
                        <div>
                            <img src={products[0].products[currentIndex].image} alt={products[0].products[currentIndex].product_name} />
                            <div className="product_name">{products[0].products[currentIndex].product_name}</div>
                        </div>
                    )}
                </div>
                <a className="prev" onClick={() => changeSlide(-1)}>❮</a>
                <a className="next" onClick={() => changeSlide(1)}>❯</a>
            </div>
            
            <section className="social-media">
                <a href="https://www.facebook.com">
                    <img src="./pictures/hi_fi_social_logo.png" alt="Facebook" />
                </a>
                <a href="https://www.b.com">
                    <img src="./pictures/hifi-frontpage_logo4.png" alt="B" />
                </a>
                <a href="https://www.twitter.com">
                    <img src="./pictures/hifi-frontpage_logo9.png" alt="Twitter" />
                </a>
            </section>
            
            <section className="info">
                <article>
                    <h1 className="info_heading">HISTORY</h1>
                    <p className="info_p">ESTABLISHED IN THE LATE 1960S, <br /> OUR FAMILY OWNED BUSINESS IS BASED IN <br />EDINBURGH AND FALKIRK SERVICING <br /> CUSTOMERS ACROSS THE UK.</p>
                </article>
                <article>
                    <h1 className="info_heading">NEWS</h1>
                    <p className="info_p">CHECK OUT OUR LATEST NEWS <br /> STORIES FOR ALL THE UP TO DATE HI- <br />FI CORNER PRODUCTS AND <br /> LAUNCHES.</p>
                </article>
                <article>
                    <h1 className="info_heading">SHOP</h1>
                    <p className="info_p">HAVE A LOOK IN OUR ONLINE SHOP <br /> FOR GREAT PRODUCTS AND DEALS.</p>
                </article>
            </section>
        </div>
    );
};

export default Home;

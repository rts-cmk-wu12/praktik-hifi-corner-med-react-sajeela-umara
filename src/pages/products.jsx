


/*import React, { useState, useEffect } from 'react';
import { useNavigate,  } from 'react-router-dom';
import Header2 from '../components/Header2';
import { IoGrid } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import '../style/products.scss';

const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [items, setItems] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();
    

    useEffect(() => {
        fetchProducts('products');
        updateCartCount();
    }, []);

    const fetchProducts = async (filter = 'products') => {
        try {
            const response = await fetch(`${API_URL}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const productData = await response.json();
            setProducts(productData);
            setItems(productData.length);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const updateCartCount = () => {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const productInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
            count += productInfo.quantity;
        }
        setCartCount(count);
    };

    const addToCart = (product) => {
        const existingCartItem = localStorage.getItem(product.product_name);
        if (existingCartItem) {
            const cartItemData = JSON.parse(existingCartItem);
            cartItemData.quantity += 1;
            localStorage.setItem(product.product_name, JSON.stringify(cartItemData));
        } else {
            localStorage.setItem(
                product.product_name,
                JSON.stringify({ quantity: 1, version: 'default', image: product.image, price: product.price })
            );
        }
        updateCartCount();
    };

    return (
        <>
            <Header2 cartCount={cartCount} />
            <header>
            <div className="products-path">
                    <span className="products-path__link" onClick={() => setCategory('all')}>home</span>
                    {category !== 'all' && <span> / </span>}
                    {category !== 'all' && <span className="products-path__filter">{category}</span>}
                    
                </div>
                    
            </header>
            <div className="products-wrapper">
                <aside className="products-filter">
                    <ul className="products-filter__categories">
                        <li className="filter-item" onClick={() => fetchProducts('products/category/Category1')}></li>
                        <li className="filter-item" onClick={() => fetchProducts('products/category/Category2')}></li>
                    </ul>
                    <section className="products-filter__shop-by">
                        <h2 className="shop-by__heading">shop by</h2>
                        <h3 className="products__under-heading">price</h3>
                        <ul className="shop-by__price-list">
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>£0 - £250</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/40/highest/100')}>£40 - £100</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/100/highest/250')}>£100 - £250</li>
                        </ul>
                        <h3 className="products__under-heading">manufacturer</h3>
                        <ul className="shop-by__producer-list">
                            <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer1')}>Producer1</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer2')}>Producer2</li>
                        </ul>
                    </section>
                </aside>
                <main className="products-main">
                    <h1 className="category-heading">{category}</h1>
                    <div className="products-display">
                        <div className="products-display__left">
                            <p className="products-display__text">sort by:</p>
                            <select name="sorter" id="products-sorter" onChange={(e) => fetchProducts(e.target.value)}>
                                <option>Price: Ascending</option>
                                <option>Price: Descending</option>
                                <option>Name: A-Z</option>
                                <option>Name: Z-A</option>
                            </select>
                            <p className="products-display__text">view as:</p>
                            <IoGrid />
                            <VscThreeBars />
                        </div>
                        <div className="products-display__right">
                            <p className="products-display__items-text">{items} Item(s)</p>
                            <p className="products-display__text">show:</p>
                            <select name="limiter" id="products-limiter" onChange={(e) => fetchProducts(e.target.value)}>
                                <option>34</option>
                                <option>25</option>
                                <option>10</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    {products.length > 0 ? (
                        <div className="product-grid">
                            {products.map((product) => (
                                product.products.map((img, index) => (
                                    <article className="product" key={index}>
                                        <img src={img.image} alt={img.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                                        <div className="product-info">
                                            <a href={`details.html?product=${img.product_name}`} className="product__name">{img.product_name}</a>
                                            <p className="product__price">£{img.price}</p>
                                            <button onClick={() => addToCart(img)} className="product__button">Add to Cart</button>
                                        </div>
                                    </article>
                                ))
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    )}
                </main>
                <aside className="products-producer">
                    <h3 className="products-producer__under-heading">manufacturer</h3>
                    <ul className="products-producer__list"></ul>
                    <button className="products-producer__button">view all</button>
                </aside>
            </div>
        </>
    );
};

export default Products;*/


/*import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header2 from '../components/Header2';
import { IoGrid } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import '../style/products.scss';

const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [items, setItems] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const chosenCategory = params.get('category');
        if (chosenCategory) {
            setCategory(chosenCategory);
            fetchProducts(`products/category/${chosenCategory}`);
        } else {
            fetchProducts('products');
        }
        updateCartCount();
    }, [location.search]);

    const fetchProducts = async (filter) => {
        try {
            const url = `${API_URL}`;
            const response = await fetch(url);
            const responseBodyClone = await response.clone().text();// Get the response body as text
        console.log('Response Body:', responseBodyClone); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const productData = await response.json();
            setProducts(productData);
            setItems(productData.length);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const updateCartCount = () => {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const productInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
            count += productInfo.quantity;
        }
        setCartCount(count);
    };

    const addToCart = (product) => {
        const existingCartItem = localStorage.getItem(product.product_name);
        if (existingCartItem) {
            const cartItemData = JSON.parse(existingCartItem);
            cartItemData.quantity += 1;
            localStorage.setItem(product.product_name, JSON.stringify(cartItemData));
        } else {
            localStorage.setItem(
                product.product_name,
                JSON.stringify({ quantity: 1, version: 'default', image: product.image, price: product.price })
            );
        }
        updateCartCount();
    };

    return (
        <>
            <Header2 cartCount={cartCount} />
            <header>
                <div className="products-path">
                    <span className="products-path__link" onClick={() => navigate('/products')}>home</span>
                    {category !== 'all' && (
                        <>
                            <span> / </span>
                            <span className="products-path__filter">{category}</span>
                        </>
                    )}
                </div>
            </header>
            <div className="products-wrapper">
                <aside className="products-filter">
                    <ul className="products-filter__categories">
                        <li className="filter-item" onClick={() => navigate(`/products?category=Category1`)}>Category1</li>
                        <li className="filter-item" onClick={() => navigate(`/products?category=Category2`)}>Category2</li>
                    </ul>
                    <section className="products-filter__shop-by">
                        <h2 className="shop-by__heading">shop by</h2>
                        <h3 className="products__under-heading">price</h3>
                        <ul className="shop-by__price-list">
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>£0 - £250</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/40/highest/100')}>£40 - £100</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/100/highest/250')}>£100 - £250</li>
                        </ul>
                        <h3 className="products__under-heading">manufacturer</h3>
                        <ul className="shop-by__producer-list">
                            <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer1')}>Producer1</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer2')}>Producer2</li>
                        </ul>
                    </section>
                </aside>
                <main className="products-main">
                    <h1 className="category-heading">{category}</h1>
                    <div className="products-display">
                        <div className="products-display__left">
                            <p className="products-display__text">sort by:</p>
                            <select name="sorter" id="products-sorter" onChange={(e) => fetchProducts(`products/sort/${e.target.value}`)}>
                                <option value="asc">Price: Ascending</option>
                                <option value="desc">Price: Descending</option>
                                <option value="name-a-z">Name: A-Z</option>
                                <option value="name-z-a">Name: Z-A</option>
                            </select>
                            <p className="products-display__text">view as:</p>
                            <IoGrid />
                            <VscThreeBars />
                        </div>
                        <div className="products-display__right">
                            <p className="products-display__items-text">{items} Item(s)</p>
                            <p className="products-display__text">show:</p>
                            <select name="limiter" id="products-limiter" onChange={(e) => fetchProducts(`products/limit/${e.target.value}`)}>
                                <option value="34">34</option>
                                <option value="25">25</option>
                                <option value="10">10</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    {products.length > 0 ? (
                        <div className="product-grid">
                            {products.map((product) => (
                                product.products.map((img, index) => (
                                    <article className="product" key={index}>
                                        <img src={img.image} alt={img.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                                        <div className="product-info">
                                            <a href={`details.html?product=${img.product_name}`} className="product__name">{img.product_name}</a>
                                            <p className="product__price">£{img.price}</p>
                                            <button onClick={() => addToCart(img)} className="product__button">Add to Cart</button>
                                        </div>
                                    </article>
                                ))
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    )}
                </main>
                <aside className="products-producer">
                    <h3 className="products-producer__under-heading">manufacturer</h3>
                    <ul className="products-producer__list"></ul>
                    <button className="products-producer__button">view all</button>
                </aside>
            </div>
        </>
    );
};

export default Products;*/



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header2 from '../components/Header2';
import { IoGrid } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import '../style/products.scss';

const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [items, setItems] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const chosenCategory = params.get('category') || 'all';
        setCategory(chosenCategory);
        fetchProducts(chosenCategory);
        updateCartCount();
    }, [location.search]);

    const fetchProducts = async (filter) => {
        try {
            const url = `${API_URL}?category=${category}`;
            const response = await fetch(url);

            if (!response.ok) {
                const responseBody = await response.text();
                console.log('Response Body:', responseBody);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const productData = await response.json();
            setProducts(productData);
            setItems(productData.length);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const updateCartCount = () => {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const productInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
            count += productInfo.quantity;
        }
        setCartCount(count);
    };

    const addToCart = (product) => {
        const existingCartItem = localStorage.getItem(product.product_name);
        if (existingCartItem) {
            const cartItemData = JSON.parse(existingCartItem);
            cartItemData.quantity += 1;
            localStorage.setItem(product.product_name, JSON.stringify(cartItemData));
        } else {
            localStorage.setItem(
                product.product_name,
                JSON.stringify({ quantity: 1, version: 'default', image: product.image, price: product.price })
            );
        }
        updateCartCount();
    };

    return (
        <>
            <Header2 cartCount={cartCount} />
            <header>
                <div className="products-path">
                    <span className="products-path__link" onClick={() => navigate('/products')}>home</span>
                    {category !== 'all' && (
                        <>
                            <span> / </span>
                            <span className="products-path__filter">{category}</span>
                        </>
                    )}
                </div>
            </header>
            <div className="products-wrapper">
                <aside className="products-filter">
                <ul className="products-filter__categories">
    {category !== 'all' && (
        <>
            <span className="products-path__filter">{category}</span>
            {products.map((category) => (
                category.products.map((nam, index) => (
                    <li key={index}>{nam.category} - {nam.product_name}</li>
                ))
            ))}
        </>
    )}
</ul>

  


                    <section className="products-filter__shop-by">
                        <h2 className="shop-by__heading">shop by</h2>
                        <h3 className="products__under-heading">price</h3>
                        <ul className="shop-by__price-list">
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>£0 - £250</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/40/highest/100')}>£40 - £100</li>
                            <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/100/highest/250')}>£100 - £250</li>
                        </ul>
                        <h3 className="products__under-heading">manufacturer</h3>

                        <ul className="shop-by__producer-list">
                            {category !== 'all' && (
                                <>
                                    <span className="products-path__filter">{category}</span>


                                    {products.map((producer) => (
                                        producer.products.map((prod, index) => (
                                            <li key={index}>{prod.producer}</li>)
                                        )))}
                                </>
                            )}
                        </ul>

                    </section>
                </aside>
                <main className="products-main">
                    <h1 className="category-heading">{category}</h1>
                    <div className="products-display">
                        <div className="products-display__left">
                            <p className="products-display__text">sort by:</p>
                            <select name="sorter" id="products-sorter" onChange={(e) => fetchProducts(`products/sort/${e.target.value}`)}>
                                <option value="asc">Price: Ascending</option>
                                <option value="desc">Price: Descending</option>
                                <option value="name-a-z">Name: A-Z</option>
                                <option value="name-z-a">Name: Z-A</option>
                            </select>
                            <p className="products-display__text">view as:</p>
                            <IoGrid />
                            <VscThreeBars />
                        </div>
                        <div className="products-display__right">
                            <p className="products-display__items-text">{items} Item(s)</p>
                            <p className="products-display__text">show:</p>
                            <select name="limiter" id="products-limiter" onChange={(e) => fetchProducts(`products/limit/${e.target.value}`)}>
                                <option value="34">34</option>
                                <option value="25">25</option>
                                <option value="10">10</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    {products.length > 0 ? (
                        <div className="product-grid">
                            {products.map((product) => (
                                product.products.map((img, index) => (
                                    <article className="product" key={index}>
                                        <img src={img.image} alt={img.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                                        <div className="product-info">
                                            <a href={`details.html?product=${img.product_name}`} className="product__name">{img.product_name}</a>
                                            <p className="product__price">£{img.price}</p>
                                            <button onClick={() => addToCart(img)} className="product__button">Add to Cart</button>
                                        </div>
                                    </article>
                                ))
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    )}
                </main>
                <aside className="products-producer">
                    <h3 className="products-producer__under-heading">manufacturer</h3>
                    <ul className="products-producer__list">
                        {category !== 'all' && (
                            <>
                                <span className="products-path__filter">{category}</span>


                                {products.map((producer) => (
                                    producer.products.map((prod, index) => (
                                        <li key={index}>{prod.producer}</li>)
                                    )))}
                            </>
                        )}
                    </ul>
                    <button className="products-producer__button">view all</button>
                </aside>
            </div>
        </>
    );
};

export default Products;



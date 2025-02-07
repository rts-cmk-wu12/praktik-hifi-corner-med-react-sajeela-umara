





/*import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/products.scss'


const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [query, setQuery] = useState('');
    const [items, setItems] = useState(0);

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
    }, [location.search]);

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

    return (
        <div >
            
            <header>
                
                <div className="products-path">
                    <span className="products-path__link" onClick={() => setCategory('all')}>home</span>
                    {category !== 'all' && <span> / </span>}
                    {category !== 'all' && <span className="products-path__filter">{category}</span>}
                    <h1 className="category-heading">{category}</h1>
                </div>
            </header>

            <div className="products-display__items-text">{items} Item(s)
                <select className="products-sorter" onChange={(e) => fetchProducts(e.target.value)}>
                    <option value="Price: Ascending">Price: Ascending</option>
                    <option value="Price: Descending">Price: Descending</option>
                    <option value="Name: A-Z">Name: A-Z</option>
                    <option value="Name: Z-A">Name: Z-A</option>
                </select>
                <div className='products-wrapper'>
                <select className="products-limiter" onChange={(e) => fetchProducts(e.target.value)}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="34">34</option>
                </select>
                <input className="product-search-input" type="text" onInput={(e) => setQuery(e.target.value)} />
                </div>

            <div>
            <nav>
                <ul className="products-filter__categories">
                    <li onClick={() => fetchProducts('products/category/Category1')}>Category1</li>
                    <li onClick={() => fetchProducts('products/category/Category2')}>Category2</li>
                </ul>
                <ul className="shop-by__price-list">
                    <li onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>10-20</li>
                    <li onClick={() => fetchProducts('products/price/lowest/20/highest/30')}>20-30</li>
                </ul>
                <ul className="shop-by__producer-list">
                    <li onClick={() => fetchProducts('products/producer/Producer1')}>Producer1</li>
                    <li onClick={() => fetchProducts('products/producer/Producer2')}>Producer2</li>
                </ul>
            </nav>
            </div>
            <main className="products-main">
                <section  >
                    {products.length > 0 ? (
                        <div className="product-grid">
                            {products.map((product) => (
                                <article className="product" key={product._id}>
                                    {product.products.map((img) => (
                                        <img src={img.image} alt={product.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                                    ))}
                                    <div className="product-info">
                                        {product.products.map((nam) => (
                                        <a href={`details.html?product=${product.product_name}`} className="product__name">{product.product_name}</a>
                                    ))}
                                        <p className="product__price">£{product.price}</p>
                                        <button onClick={() => product(product)} className="product__button">add to cart</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    )}
                </section>
                
            </main>
            </div>
            
        </div>
    );
};

export default Products;*/



// src/pages/Products.jsx
/*import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/products.scss'

const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(0);

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
  }, [location.search]);

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

  return (
    <div className="products-wrapper">
      <aside className="products-filter">
        <ul id="products-filter__categories">
          <li className="filter-item" onClick={() => fetchProducts('products/category/Category1')}>Category1</li>
          <li className="filter-item" onClick={() => fetchProducts('products/category/Category2')}>Category2</li>
        </ul>
        <ul id="shop-by__price-list">
          <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>10-20</li>
          <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/20/highest/30')}>20-30</li>
        </ul>
        <ul id="shop-by__producer-list">
          <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer1')}>Producer1</li>
          <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer2')}>Producer2</li>
        </ul>
      </aside>
      <main id="products-main">
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              product.products.map((img, index) => (
                <article className="product" key={index}>
                  <img src={img.image} alt={product.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                  <div className="product-info">
                    <a href={`details.html?product=${product.product_name}`} className="product__name">{product.product_name}</a>
                    <p className="product__price">£{product.price}</p>
                    <button onClick={() => addProduct(product)} className="product__button">add to cart</button>
                  </div>
                </article>
              ))
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </main>
    </div>
  );
};

export default Products;*/


// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/products.scss'

const API_URL = 'http://localhost:3000/api/products';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [query, setQuery] = useState('');
    const [items, setItems] = useState(0);

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
    }, [location.search]);

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

    return (

        <div className="products-wrapper">

            <header>

                <div className="products-path">
                    <span className="products-path__link" onClick={() => setCategory('all')}>home</span>
                    {category !== 'all' && <span> / </span>}
                    {category !== 'all' && <span className="products-path__filter">{category}</span>}
                    <h1 className="category-heading">{category}</h1>
                </div>
            </header>
            <aside className="products-filter">
                <ul id="products-filter__categories">
                    <li className="filter-item" onClick={() => fetchProducts('products/category/Category1')}>Category1</li>
                    <li className="filter-item" onClick={() => fetchProducts('products/category/Category2')}>Category2</li>
                </ul>
                <ul id="shop-by__price-list">
                    <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/10/highest/20')}>10-20</li>
                    <li className="filter-item" onClick={() => fetchProducts('products/price/lowest/20/highest/30')}>20-30</li>
                </ul>
                <ul id="shop-by__producer-list">
                    <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer1')}>Producer1</li>
                    <li className="filter-item" onClick={() => fetchProducts('products/producer/Producer2')}>Producer2</li>
                </ul>
            </aside>
            <main id="products-main">
                {products.length > 0 ? (
                    <div className="product-grid">
                        {products.map((product) => (
                            product.products.map((img, index) => (
                                <article className="product" key={index}>
                                    <img src={img.image} alt={img.product_name} className="product__image" onError={(e) => e.target.style.display = 'none'} />
                                    <div className="product-info">
                                        <a href={`details.html?product=${img.product_name}`} className="product__name">{img.product_name}</a>
                                        <p className="product__price">£{img.price}</p>
                                        <button onClick={() => addProduct(img)} className="product__button">add to cart</button>
                                    </div>
                                </article>
                            ))
                        ))}
                    </div>
                ) : (
                    <p>No products found</p>
                )}
            </main>
        </div>
    );
};

export default Products;



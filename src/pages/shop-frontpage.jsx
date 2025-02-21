



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header3 from '../components/Header3';
import '../style/shop-frontpage.css';

const Frontpage = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Checking image paths...');
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.onerror = () => console.error(`Image not found: ${img.src}`);
        });
    }, []);

    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <>
            <Header3 />
            <main id="main">
                <div className="frontpage__pics">
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('brands')}>
                        <img src="images/shop_by_brands.jpg" alt="Shop by brands" />
                        <a className="textbox" href="#"> <p>Shop by brands</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('amplifiers')}>
                        <img src="images/amplifiers.jpg" alt="Amplifiers" />
                        <a className="textbox" href="#"> <p>Amplifiers</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('speakers')}>
                        <img src="images/speaker.jpg" alt="Speakers" />
                        <a className="textbox" href="#"> <p>Speakers</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('turntables')}>
                        <img src="images/turntable.jpg" alt="Turn table" />
                        <a className="textbox" href="#"> <p>Turn table</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('cd-players')}>
                        <img src="images/cd_player.jpg" alt="CD players" />
                        <a className="textbox" href="#"> <p>CD players</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('streamers')}>
                        <img src="images/streamers.jpg" alt="Streamers" />
                        <a className="textbox" href="#"> <p>Streamers</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('cables')}>
                        <img src="images/cables.jpg" alt="Cables" />
                        <a className="textbox" href="#"> <p>Cables</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('furniture')}>
                        <img src="images/home_cinema.jpg" alt="Furniture" />
                        <a className="textbox" href="#"> <p>Furniture</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('headphones')}>
                        <img src="images/headphones.jpg" alt="Headphones" />
                        <a className="textbox" href="#"> <p>Headphones</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('home-cinema')}>
                        <img src="images/home_cinema.jpg" alt="Home cinema" />
                        <a className="textbox" href="#"> <p>Home cinema</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('outlet')}>
                        <img src="images/player_closeup.jpg" alt="Outlet" />
                        <a className="textbox" href="#"> <p>Outlet - save up to 50% off</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('ebay-shop')}>
                        <img src="images/ebay_webshop.jpg" alt="Ebay shop" />
                        <a className="textbox ebay" href="#"> <p>Ebay shop</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('ceiling-speakers')}>
                        <img src="images/celing_speakers.jpg" alt="Ceiling speakers" />
                        <a className="textbox" href="#"> <p>Ceiling speakers</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('tvs')}>
                        <img src="images/tv.jpg" alt="TVs" />
                        <a className="textbox" href="#"> <p>TVs</p></a>
                    </div>
                    <div className="frontpage__pics_box" onClick={() => handleCategoryClick('vinyl')}>
                        <img src="images/vinyl.jpg" alt="Vinyl lps" />
                        <a className="textbox" href="#"> <p>Vinyl lps</p></a>
                    </div>
                    <div className="frontpage__pics_box2">
                        <div className="textbox2">
                            <a href="shop-kategori-liste.html"> <p>Shop now</p></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Frontpage;



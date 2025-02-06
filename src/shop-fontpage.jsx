import React from 'react';
import './style/shop-frontpage.css';

const Frontpage = () => {
    React.useEffect(() => {
        console.log('Checking image paths...');
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.onerror = () => console.error(`Image not found: ${img.src}`);
        });
    }, []);

    return (
        <main id="main">
            <div className="frontpage__pics">
                <div className="frontpage__pics_box">
                    <img src="images/shop_by_brands.jpg" alt="Shop by brands" />
                    <a className="textbox" href="single-produkt.html"> <p>Shop by brands</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/amplifiers.jpg" alt="Amplifiers" />
                    <a className="textbox" href="single-produkt.html"> <p>Amplifiers</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/speaker.jpg" alt="Speakers" />
                    <a className="textbox" href=""> <p>Speakers</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/turntable.jpg" alt="Turn table" />
                    <a className="textbox" href="single-produkt.html"> <p>Turn table</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/cd_player.jpg" alt="CD players" />
                    <a className="textbox" href="single-produkt.html"> <p>CD players</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/streamers.jpg" alt="Streamers" />
                    <a className="textbox" href="single-produkt.html"> <p>Streamers</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/cables.jpg" alt="Cables" />
                    <a className="textbox" href="single-produkt.html"> <p>Cables</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/home_cinema.jpg" alt="Furniture" />
                    <a className="textbox" href="single-produkt.html"> <p>Furniture</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/headphones.jpg" alt="Headphones" />
                    <a className="textbox" href="single-produkt.html"> <p>Headphones</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/home_cinema.jpg" alt="Home cinema" />
                    <a className="textbox" href="single-produkt.html"> <p>Home cinema</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/player_closeup.jpg" alt="Outlet" />
                    <a className="textbox" href="single-produkt.html"> <p>Outlet - save up to 50% off</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/ebay_webshop.jpg" alt="Ebay shop" />
                    <a className="textbox ebay" href="single-produkt.html"> <p>Ebay shop</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/celing_speakers.jpg" alt="Ceiling speakers" />
                    <a className="textbox" href="single-produkt.html"> <p>Ceiling speakers</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/tv.jpg" alt="TVs" />
                    <a className="textbox" href="single-produkt.html"> <p>TVs</p></a>
                </div>
                <div className="frontpage__pics_box">
                    <img src="images/vinyl.jpg" alt="Vinyl lps" />
                    <a className="textbox" href="single-produkt.html"> <p>Vinyl lps</p></a>
                </div>
                <div className="frontpage__pics_box2">
                    <div className="textbox2">
                        <a href="shop-kategori-liste.html"> <p>Shop now</p></a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Frontpage;


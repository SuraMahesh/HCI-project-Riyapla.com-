import React from 'react';
import Category from '../Category/Category';
import "./Home.css";


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image" src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/publications/2018/september/Automotive-Manager-2018/getting-online-car-sales-in-gear-1600-602.jpg.imgix.banner.jpg" />
                <div className="home__row">
                    <Category
                        title="Apple Products"
                        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                    <Category />
                </div>
                <div className="home__row">
                    <Category
                        title="Apple Products"
                        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                    <Category
                        title="Apple Products"
                        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                    <Category
                        title="Apple Products"
                        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                    <Category
                        title="Apple Products"
                        img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                </div>
                <div className="home__row">

                </div>
            </div>
        </div>
    )
}

export default Home

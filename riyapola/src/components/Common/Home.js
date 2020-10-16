import React from 'react';
import "./Home.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import Logo3 from "../Images/Logo3.jpeg";


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image" src="https://import.lk/wp-content/uploads/2020/08/vehicles.jpg" />
                <div className="home__section">
                    <Link to="/vehicles">
                    <Card 
                    src="https://enthusiastnetwork.s3.amazonaws.com/uploads/sites/5/2009/01/112_0903_01z-car_comparison-group_shot.jpg?fit=around%7C480:270"
                    title="Vehicles"
                    description="We provide the best direct import facility for all kind of vehicles"
                    />
                    </Link>
                    <Link to="/electronic">
                    <Card 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg?im_w=720"
                    title="Electronics"
                    description="Shop home entertainment, accessories and more."
                    />
                    </Link>
                    <Link to="property">
                    <Card
                    src="https://nextbigtechnology.com/wp-content/uploads/2019/11/shutterstock_198883310-e1499838393321-2.jpg"
                    title="Property"
                    description="Spaces that are more than just a place to sleep."
                    />
                    </Link>
                </div>
                <div className="home__section">
                    <Link to="jobs">
                    <Card 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                    title="Jobs"
                    description="Samples will help you compose a job posting that meets your company's needs."
                    />
                    </Link>
                    <Link to="education">
                    <Card 
                    src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                    title="Education"
                    description="Education is the teaching or learning of knowledge, especially to develop the reasoning."
                    />
                    </Link>
                    <Link to="HandG">
                    <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Home & Gardens"
                    description="The best in desin, Decoration and style"
                    />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react';
import "./Electronics.css";
import Banner from "./EBanner"
import Card from "./ElectronicsCard"
import { Link } from "react-router-dom";

function Electronics() {
    return (
        <div className="electrnics">
            <Banner />
            <div className="electronic__section">
                <Link to="/domestic">
            <Card 
                    src="https://i1.wp.com/valourdigest.com/wp-content/uploads/2018/01/home-appliance1.jpg?fit=576%2C288&amp;ssl=1"
                    title="Domestic"
                    description="Fridge, Tv, Fan,"
                     />
                     </Link>
                     <Link to ="laptop">
                    <Card 
                    src="https://contents.asurion.com/wp-content/uploads/2020/07/Tablet-or-Laptop-for-Kid-Students.png"
                    title="Laptos & Tab"
                    description="Apple, Acer, Dell, Hp, Huawei"
                    />
                    </Link>
                    <Link to="/phone">
                    <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Ra-m3k2Z0pzH9IdgYhykM2U6D_yTei_DJg&amp;usqp=CAU" 
                    title="Phones & Accessories"
                    description="Apple, Huawei, Samsung, Xaomi, Oppo"
                    />
                    </Link>
            </div>
            
        </div>
    )
}

export default Electronics

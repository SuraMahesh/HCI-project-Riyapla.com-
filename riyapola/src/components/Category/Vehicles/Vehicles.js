import React from 'react';
import "./Vehicles.css";
import { Link } from "react-router-dom";
import Card from "./VehiclesCard";
import Banner from "./VBanner"


function Vehicles() {
    return (
        <div className="vehicle">
            <Banner />
            <div className="vehicle__section">
                    <Link to="/cars">
                    <Card 
                    src="https://www.toyota.lk/wp-content/uploads/2018/09/landing.jpg"
                    title="Cars"
                    description="Toyota, Nizzan, BMW, Audi"
                     />
                    </Link>
                    <Link to="/van">
                    <Card 
                    src="https://lankatropicalwonders.com/uploads/tgallery/kdh_flat_031.jpg"
                    title="Van"
                    description="Toyota, Nizzan"
                    />
                    </Link>
                    <Link to="/motorbikes">
                    <Card
                    src="https://storage.googleapis.com/ti-thebikeinsurer/grid-boxes/extra/top-10/main_1441277375.png"
                    title="Motorbikes"
                    description="Pulser, Honda, TVS, Discover"
                    />
                    </Link>
                </div>
            
        </div>
    )
}

export default Vehicles

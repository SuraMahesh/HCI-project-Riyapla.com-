import React from 'react';
import "./Electronics.css";
import Banner from "./EBanner"
import Card from "./ElectronicsCard"

function Electronics() {
    return (
        <div className="electrnics">
            <Banner />
            <div className="electronic__section">
            <Card 
                    src="https://www.toyota.lk/wp-content/uploads/2018/09/landing.jpg"
                    title="Cars"
                    description="Toyota, Nizzan, BMW, Audi"
                     />
                    <Card 
                    src="https://lankatropicalwonders.com/uploads/tgallery/kdh_flat_031.jpg"
                    title="Van"
                    description="Toyota, Nizzan"
                    />
                    <Card
                    src="https://storage.googleapis.com/ti-thebikeinsurer/grid-boxes/extra/top-10/main_1441277375.png"
                    title="Motorbikes"
                    description="Pulser, Honda, TVS, Discover"
                    />
            </div>
            
        </div>
    )
}

export default Electronics

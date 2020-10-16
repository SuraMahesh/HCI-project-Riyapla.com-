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
                    src="https://www.lowcarbonbuildings.org.uk/wp-content/uploads/2018/05/home-appliances-681x511.jpg"
                    title="Domestic"
                    description="Fridge, Tv, Fan,"
                     />
                     </Link>
                     <Link to ="laptop">
                    <Card 
                    src="https://nassortechnologies.com/wp-content/uploads/2019/07/nastech2385764.jpg"
                    title="Laptos & Tab"
                    description="Apple, Acer, Dell, Hp, Huawei"
                    />
                    </Link>
                    <Link to="/phone">
                    <Card
                    src="https://1.bp.blogspot.com/-6j0O7KLU44g/VycGES9Gr4I/AAAAAAAAAWY/IT8jC_2lDMQKuCFUrwMpudemZVYVDjeEwCLcB/s1600/country-wise-mobile-phones-import.png" 
                    title="Phones & Accessories"
                    description="Apple, Huawei, Samsung, Xaomi, Oppo"
                    />
                    </Link>
            </div>
            
        </div>
    )
}

export default Electronics

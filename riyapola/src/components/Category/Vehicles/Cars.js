import { Button } from '@material-ui/core';
import React from 'react';
import "./Cars.css";
import SearchResults from './SearchResults';


function Cars() {
    return (
        <div className="carsPage">
            <div className="carsPage__info">
                <Button
                variant="outlined">Type of Car brands
                </Button>
                <Button
                variant="outlined">Price
                </Button>
                <Button
                variant="outlined">Model year
                </Button>
                <Button
                variant="outlined">More filter
                </Button>
            </div>
            <SearchResults 
            img=""
            location="Colombo"
            title=""
            description=""
            star={4.73}
            price="3,500,000"

            />
            
        </div>
    )
}

export default Cars

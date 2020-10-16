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
                img="https://www.gembo.lk/wp-content/uploads/2019/10/71545954_2369535363294934_3517633556077608960_n.jpg"
                location="Colombo"
                title="Toyota Primio"
                description="2016 Toyota Premio 1.5 F L Package (NZT260, Japan)"
                star={4.73}
                price="3,500,000"

            />

        </div>
    )
}

export default Cars

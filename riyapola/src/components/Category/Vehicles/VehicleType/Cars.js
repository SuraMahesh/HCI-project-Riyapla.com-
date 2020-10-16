import { Button } from '@material-ui/core';
import React from 'react';
import "./Cars.css";
import SearchResults from '../SearchResults';


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
                price="5,500,000 RS"

            />
            <SearchResults
            img="https://www.likes.lk/oc-content/uploads/12/4351.jpg"
            location="Kandy"
            title="Toyota Allion"
            description="Toyota Allion 240 2004 Rg 2008 Rear Wiper."
            star={4.03}
            price="4,500,000 RS"

        />

        </div>
    )
}

export default Cars

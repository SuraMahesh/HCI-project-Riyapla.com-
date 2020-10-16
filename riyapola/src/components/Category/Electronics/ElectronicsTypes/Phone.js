import React from 'react';
import "./Phone.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResult";

function Phone() {
    return (
        <div className="phonePage">
        <div className="phonePage__info">
            <Button
                variant="outlined">Items
            </Button>
            <Button
                variant="outlined">Price
            </Button>
            <Button
                variant="outlined">Brand
            </Button>
            <Button
                variant="outlined">More filter
            </Button>
        </div>
        <SearchResults
            img="https://www.gembo.lk/wp-content/uploads/2019/10/71545954_2369535363294934_3517633556077608960_n.jpg"
            shop_name="Colombo"
            title="Toyota Primio"
            description="2016 Toyota Premio 1.5 F L Package (NZT260, Japan)"
            star={4.73}
            price="5,500,000 RS"

        />
      

    </div>
    )
}

export default Phone

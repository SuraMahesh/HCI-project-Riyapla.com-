import React from 'react';
import "./FullTime.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function FullTime() {
    return (
        <div className="fullPage">
            <div className="fullPage__info">
            <Button
                variant="outlined">Job Title
            </Button>
            <Button
                variant="outlined">Location
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
          

        </div>
    )
}

export default FullTime

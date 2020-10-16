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
            <SearchResults
                img="https://media.ed.edmunds-media.com/audi/a6/2018/oem/2018_audi_a6_sedan_30-tfsi-prestige-quattro_fq_oem_3_815.jpg"
                location="Negombo"
                title="Audi"
                description="2018 Audi A6 Review and Ratings | Edmunds"
                star={4.73}
                price="8,900,000 RS"

            />
            <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg"
            location="Battaramulla"
            title="Honda Civic"
            description="Brazilian Honda Civic touring_2017"
            star={5.03}
            price="5,500,000 RS"

        />
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

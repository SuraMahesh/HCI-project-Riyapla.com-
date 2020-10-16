import React from 'react';
import "./Motorbikes.css";
import SearchResults from '../SearchResults';
import { Button } from '@material-ui/core';

function Motorbikes() {
    return (
        <div className="bikesPage">
        <div className="bikesPage__info">
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
            img="https://upload.wikimedia.org/wikipedia/commons/f/f0/Red_Bajaj_Pulsar_outside_hotel_in_Goa.jpg"
            location="Gampaha"
            title="Bajaj Pulser"
            description="Bajaj Pulser 150 2014"
            star={6.73}
            price="150,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/0/09/Cb110.jpg"
            location="Colombo"
            title="Honda CB Twister"
            description="Honda CB Twister 2011"
            star={5.65}
            price="100,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Apache_RTR_160.jpg/220px-Apache_RTR_160.jpg"
            location="Kandy"
            title="TVS Apache"
            description="TVS Apache 2008 model"
            star={6.00}
            price="120,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/KTM_DUKE_200_front.JPG/1200px-KTM_DUKE_200_front.JPG"
            location="Kaduwela"
            title="KTM 200 Duke"
            description="2017  Model KTM Duke"
            star={7.73}
            price="110,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/c/ca/Yamaha_FZ16.jpg"
            location="Kirulapana"
            title="Yamaha FZ16"
            description="Yamaha FZ16 model 2016"
            star={5.13}
            price="150,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/f/f0/Honda_PCX125_2011_Front.JPG"
            location="Seeduwa"
            title="Honda PCX"
            description="2015 Honda PCX 150cc"
            star={4.73}
            price="90,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Honda_Dio_HET_2013.jpg/300px-Honda_Dio_HET_2013.jpg"
            location="Negombo"
            title="Honda Dio"
            description="Honda Dio 102cc"
            star={7.73}
            price="85,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Scootystreak-1.jpg/220px-Scootystreak-1.jpg"
            location="Kandy"
            title="TVS Scooty"
            description="TVS Scooty Streak 2009"
            star={8.73}
            price="85,000 RS"

        />
        <SearchResults
            img="https://stat.overdrive.in/wp-content/uploads/2018/07/TVS-XL-100-iTouch-Start-3.jpg"
            location="Wattala"
            title="TVS XL"
            description="TVS XL 100 i"
            star={6.73}
            price="108,000 RS"

        />
        <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/2/27/Pulsar_ug3.JPG"
            location="Kelaniya"
            title="Pulser Ug3"
            description="Bajaj Pulser DTSi 180 UG3"
            star={7.50}
            price="150,000 RS"

        />
       

    </div>
    )
}

export default Motorbikes


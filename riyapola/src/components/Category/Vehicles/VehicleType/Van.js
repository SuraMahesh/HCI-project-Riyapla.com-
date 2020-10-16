import React from 'react';
import "./Van.css";
import SearchResults from '../SearchResults';
import { Button } from '@material-ui/core';

function Van() {
    return (
        <div className="vanPage">
        <div className="vanPage__info">
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
            img="https://www.autobay.lk/wp-content/uploads/2015/09/496969-500x375.jpg"
            location="Katunayaka"
            title="Toyota Hiace"
            description="Toyota Hiace Van KDH GL 2014"
            star={5.73}
            price="6,300,000 RS"

        />
         <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/5/55/2005_Toyota_TownAce_01.jpg"
            location="Colombo"
            title="Toyota Townace"
            description="2005 Toyota Townace "
            star={3.43}
            price="3,500,000 RS"

        />
         <SearchResults
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDPDh_G84Xsd5nVC4qf9Lp2sYso_i4AbsWaQ&usqp=CAU"
            location="Kandy"
            title="Nissan Caravan"
            description="Nissan Caravan Coach 2005/1"
            star={4.73}
            price="2,500,000 RS"

        />
         <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/3/30/2018_Nissan_Serena_hybrid.jpg"
            location="Nugegoda"
            title="Nissan Serena"
            description="Nissan Serena hybrid 2016"
            star={5.73}
            price="3,700,000 RS"

        />
         <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2017_Toyota_Noah_Si_%28facelift%2C_front%29.jpg/200px-2017_Toyota_Noah_Si_%28facelift%2C_front%29.jpg"
            location="Maharagama"
            title="Toyota Noah"
            description="2017 New Toyota Noah 2.0L 4WD - Exterier and Interier"
            star={5.00}
            price="7,500,000 RS"

        />
         <SearchResults
            img="https://sc01.alicdn.com/kf/HTB1_kFyIpXXXXbkXVXXq6xXFXXXr.jpg"
            location="Negombo"
            title="Suzuki"
            description="Suzuki GA 2014"
            star={3.73}
            price="3,200,000 RS"

        />
         <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/9/99/2004_Mitsubishi_Express_%28WA_MY04%29_van_%282015-06-18%29_01.jpg"
            location="Ja ela"
            title="Mitsubishi"
            description="2004 Mitsubishi Express (WA -MY04)"
            star={5.93}
            price="2,500,000 RS"

        />
         <SearchResults
            img="https://www.japautoagent.com/wp-content/uploads/2020/01/Delica-D5-.png"
            location="Chilaw"
            title="Mitsubishi Delica"
            description="Mitsubishi Delica D5 2.4i 2/4WD"
            star={5.23}
            price="4,150,000 RS"

        />
         <SearchResults
            img="https://image-cdn.beforward.jp/large/202010/2037722/BH507882_06d463.jpg"
            location="Malabe"
            title="Toyota Noah"
            description="2016 Toyota Noah/ZWR80G"
            star={4.73}
            price="4,000,000 RS"

        />
        \ <SearchResults
            img="https://www.ccarprice.com/products/Suzuki-APV-Utility-Van-2019.png"
            location="Kurunegala"
            title="Suzuki"
            description="Suzuki APV utility Van"
            star={4.00}
            price="4,750,000 RS"

        />
      

    </div>
)
    
}

export default Van

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
            img="https://i.ytimg.com/vi/a3ri02YlbEo/maxresdefault.jpg"
            location="Matara"
            title="Toyota Aqua"
            description="Toyota Aqua Hybrid 2015"
            star={4.77}
            price="3,522,000 RS"

        />
            <SearchResults
            img="https://www.japanesevehicles.com/photos/L/197162/197162-1.jpg"
            location="Galle"
            title="Toyota Vezel Hybrid"
            description="Toyota Vezel Hybrid 2017"
            star={6.03}
            price="9,500,000 RS"

        />
            <SearchResults
            img="https://upload.wikimedia.org/wikipedia/commons/f/f0/Toyota_PREMIO_1.5F_L_Package_%28DBA-NZT260-AEXEK%29.jpg"
            location="Kiribathgoda"
            title="Toyota Premio"
            description="Toyota Premio 2016"
            star={8.03}
            price="7,500,000 RS"

        />
            <SearchResults
            img="https://www.microcars.lk/images/product_details/baic_d20_hatch.jpg"
            location="Ja-ela"
            title="Micro BAIC D20"
            description="Micro BAIC D20 2018"
            star={7.03}
            price="3,800,000 RS"

        />
            <SearchResults
            img="https://worldnet-rentacar.co.jp/wordpress/wp-content/uploads/2020/07/7e742b27dac4f6dc570e9f29960a1119-1.jpg"
            location="Dankotuwa"
            title="Toyota Axio"
            description="Toyota Axio WXB Hybrid 2018 "
            star={4.03}
            price="7,950,000 RS"

        />
            <SearchResults
            img="https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/kia-sportage-used.jpg"
            location="Kadana"
            title="KIA sporatage"
            description="KIA sportage 2011"
            star={5.50}
            price="4,975,000 RS"

        />


        <SearchResults
            img="https://cnet1.cbsistatic.com/img/oUE5am8D_vQvpLYUlMZpaVELgFE=/940x528/2020/05/21/6dbf688f-b506-46f0-8ac3-6b82c49c7e70/sonata-promo.jpg"
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

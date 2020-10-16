import React from 'react';
import "./Domestic.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResult";



function Domestic() {
    return (
        <div className="domesticPage">
        <div className="domesticPage__info">
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
            img="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_40__n5000_full_hd_tv.jpg"
            shop_name="Kegalle"
            title="Samsung TV'"
            description="40' N5000 Full HD TV"
            star={4.73}
            price="82,500 RS"

            />
            <SearchResults
            img="https://www.singersl.com/sites/default/files/images/products/2020-01/SIN_SLE32F590-01_zoom.jpg"
            shop_name="Colombo"
            title="SIGER"
            description="32' HD Android Smart TV"
            star={4.73}
            price="39,999 RS"

            />
        <SearchResults
            img="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/sin_geo-242d-01_zoom_2.jpg"
            shop_name="Colombo"
            title="SINGER REFRIGERATOR"
            description="SINGER GEO-260 Refrigerator"
            star={4.93}
            price="82,815 RS"

            />
            <SearchResults
            img="https://buyabans.com/upload/product/Refrigerator/LGRF6011NSNBS/web.jpg"
            shop_name="Gampaha"
            title="LG-REFRIGERATOR"
            description="668L DOOR IN DOOR SXS-NOBEL"
            star={4.73}
            price="589,990 RS"

            />
            <SearchResults
            img="https://buyabans.com/upload/product/Electric%20oven/ABOVSTV33D/web.jpg"
            shop_name="Colombo"
            title="ABANS OVEN"
            description="Electric Oven 33L"
            star={4.73}
            price="16,990 RS"

            />
            <SearchResults
            img="https://www.singersl.com/sites/default/files/images/products/2020-08/SIN_KA-OPTIMA-01_zoom.jpg"
            shop_name="Negambo"
            title="Toaster"
            description="Sisil Sandwich Toaster-3 plates"
            star={4.73}
            price="3,999 RS"

            />
            <SearchResults
            img="https://www.gembo.lk/wp-content/uploads/2019/10/71545954_2369535363294934_3517633556077608960_n.jpg"
            shop_name="Colombo"
            title="Pop Up Toaster"
            description="Abans 4 Slice Pop Up Tosster-FT-4003T"
            star={4.83}
            price="4,299 RS"

            />
            <SearchResults
            img="data:image/jpeg;base64,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"
            shop_name="Colombo"
            title="Toyota Primio"
            description="2016 Toyota Premio 1.5 F L Package (NZT260, Japan)"
            star={4.73}
            price="5,500,000 RS"

            />
            <SearchResults
            img="https://www.gembo.lk/wp-content/uploads/2019/10/71545954_2369535363294934_3517633556077608960_n.jpg"
            shop_name="Colombo"
            title="Toyota Primio"
            description="2016 Toyota Premio 1.5 F L Package (NZT260, Japan)"
            star={4.73}
            price="5,500,000 RS"

            />
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

export default Domestic

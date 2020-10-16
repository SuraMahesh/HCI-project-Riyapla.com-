import React from 'react';
import "./Laptop.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResult";

function Laptop() {
    return (
        <div className="laptopPage">
        <div className="laptopPage__info">
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
            img="https://www8.hp.com/ca/en/images/ProBook600_Carousel_803x450_3_tcm223_2552830_tcm223_2552849_tcm223-2552830.png"
            shop_name="Colombo"
            title="HP Laptop"
            description="i5 8th Gen MX130"
            star={4.93}
            price="89,000 RS"

            />
            <SearchResults
            img="https://static.bhphoto.com/images/images2500x2500/1455278761_1221893.jpg"
            shop_name="Mathale"
            title="HP Laptop"
            description="i5 10th Gen Laptop"
            star={4.73}
            price="130,000 Rs"

            />
             <SearchResults
            img="https://www.fastbuy.lk/wp-content/uploads/2020/05/asus-core-i7-X509JB-laptop-sri-lanka.png"
            shop_name="Kurunegala"
            title="Asus Laptop"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.77}
            price="120,000 RS"

            />
             <SearchResults
            img="https://i.ytimg.com/vi/B6TNXN8nSjA/maxresdefault.jpg"
            shop_name="Negambo"
            title="Acer Laptop"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.74}
            price="89,000 RS"

            />
             <SearchResults
            img="https://cdn11.bigcommerce.com/s-hvhcbznkl4/images/stencil/original/products/7098/47507/apiuevb9i__31077.1554466510.jpg?c=2"
            shop_name="Malabe"
            title="Acer Laptop"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.73}
            price="89,000 RS"

            />
             <SearchResults
            img="https://www.lapzone.lk/wp-content/uploads/2018/06/MSI-GL63-8RD.jpg"
            shop_name="Gampaha"
            title="msi Laptop"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.83}
            price="300,000 RS"

            />
             <SearchResults
            img="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_9575_2_in_1/spi/ng/notebook-xps-15-9575-2-in-1-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400"
            shop_name="Kurunegala"
            title="DEL"
            description="i5 10th Gen Laptop"
            star={4.93}
            price="75,000 RS"

            />
             <SearchResults
            img="https://www.laptop.lk/images/products/858.jpg"
            shop_name="Colombo"
            title="ASUS VivoBook"
            description="i5 10th Gen Laptop"
            star={4.73}
            price="100,000 RS"

            />
             <SearchResults
            img="https://www.bdstall.com/asset/product-image/giant_57855.jpg"
            shop_name="Kegalle"
            title="MAC Book"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.93}
            price="350,000 RS"

            />
             <SearchResults
            img="https://www.elkor.lv/img/1024/1024/resize/catalog/product/a/s/aspire_a315-54k-35rx.jpg"
            shop_name="Kandy"
            title="Acer Laptop"
            description="i7 10th Gen 8GB RAM 2GB VGA"
            star={4.73}
            price="87,000 RS"

        />
      

    </div>
    )
}

export default Laptop

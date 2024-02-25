import React, { useState } from 'react';
import ShopLogo from './shop-logo';
import ProductList from './product-list';
import products from './products'

const ShopForMan = () => {

    const [list, setlist] = useState(products);

    return (
        <div id='MensShop'>
            <ShopLogo />

            <div id="offersBody">
                <h1 id='offers'>Special offers</h1>
                <div id='shopBodyList'>
                    {list.map((product) => (<ProductList {...product} key={product.id} />))}
                </div>
            </div>
        </div>
    );
}

export default ShopForMan;

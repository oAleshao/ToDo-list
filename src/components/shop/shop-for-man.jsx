import React, { useState } from 'react';
import ShopLogo from './shop-logo';
import ProductList from './product-list';
import products from './products'
import ShowProduct from './show-product';


const ShopForMan = () => {

    const [list, setlist] = useState(products);
    const [vanish, setVanish] = useState(false);
    const [product, setProduct] = useState('');
    const [formVis, setformVis] = useState(false);

    const openForm = () => {
        setformVis(true);
        alert("work");
    }

    const ChooseProduct = (product) => {
        setVanish(true);
        setProduct(product);
    }

    return (
        <div id='MensShop'>
            <ShopLogo openForm={openForm} />

            <div id="offersBody">
                <h1 id='offers'>Special offers</h1>
                <div id='shopBodyList'>
                    {list.map((product) => (<ProductList {...product} product={product} ChooseProduct={ChooseProduct} key={product.id} />))}
                </div>
            </div>

            {vanish && (
                <ShowProduct {...product}></ShowProduct>
            )}

        </div>
    );
}

export default ShopForMan;

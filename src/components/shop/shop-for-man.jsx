import React, { useState } from 'react';
import ShopLogo from './shop-logo';
import ProductList from './product-list';
import products from './products'
import ShowProduct from './show-product';
import ProductAdd from './product-add';
import { nanoid } from 'nanoid';


const ShopForMan = () => {

    const [list, setlist] = useState(products);
    const [vanish, setVanish] = useState(false);
    const [product, setProduct] = useState('');
    const [formVis, setformVis] = useState(false);

    const openForm = () => {
        setformVis(!formVis);
    };

    const ChooseProduct = (product) => {
        setVanish(true);
        setProduct(product);
    };

    const createProduct = (title, category, description, price, image) => {
        console.log(`${title} ${category} ${description} ${price} ${image}`);
        setlist([...list, {
            id: nanoid(),
            title: title,
            price: price,
            category: category,
            description: description,
            image: image,
            rating: { rate: 0, count: 0 }
        }])
    };

    return (
        <div id='MensShop'>
            <ShopLogo openForm={openForm} />

            <div id="offersBody">
                <h1 id='offers'>Special offers</h1>
                <div id='shopBodyList'>
                    {list.map((product) => (<ProductList {...product} product={product} ChooseProduct={ChooseProduct} key={product.id} />))}
                </div>
            </div>
            {formVis && (
                <ProductAdd createProduct={createProduct} />
            )}


            {vanish && (
                <ShowProduct {...product}></ShowProduct>
            )}

        </div>
    );
}

export default ShopForMan;

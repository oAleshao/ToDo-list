import React from 'react';


const ProductList = ({ id, title, description, price, category, image, rating }) => {

    if (title.length > 20)
        title = title.substring(0, 20) + "...";

    return (
        <div id='item'>
            <div></div>
            <img src={image}></img>
            <div>
                <h1>{title}</h1>
                <p>{price}$</p>
            </div>
        </div>
    );
}

export default ProductList;

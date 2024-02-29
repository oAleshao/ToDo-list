import React from 'react';
import starImg from '../../img/star.png'

const ShowProduct = ({ id, title, description, price, category, image, rating }) => {
    return (
        <div id='detailsProduct'>
            <div>
                <h1>Category: {category}</h1>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>{price}$</h4>
            </div>
            <div className='dImgProd'>
                <img src={image}></img>
            </div>
            <div id='rateBlock'>
                <img src={starImg}></img>
                <p>{rating.rate}</p>
            </div>
        </div>
    );
}

export default ShowProduct;

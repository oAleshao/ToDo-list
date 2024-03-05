import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductList = ({ id, title, description, price, category, image, rating, ChooseProduct, product, changeFavlist }) => {

    const [favorite, setFavorite] = useState(false);

    const changeFav = (e) => {
        e.stopPropagation();
        setFavorite(!favorite)
        changeFavlist(id, !favorite);
    }


    if (title.length > 20)
        title = title.substring(0, 20) + "...";

    return (
        <div id='item' onClick={() => { ChooseProduct(product) }}>

            <div>
                {favorite ?
                    <FavoriteIcon id='FavoriteIcon' onClick={(e) => {
                        changeFav(e);
                    }} /> :
                    <FavoriteBorderIcon id='FavoriteBorderIcon' onClick={(e) => {
                        changeFav(e);

                    }} />
                }
            </div>
            <img src={image}></img>
            <div>
                <h1>{title}</h1>
                <p>{price}$</p>
            </div>
        </div>
    );
}

export default ProductList;

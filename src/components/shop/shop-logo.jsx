import React from 'react';
import './style.css';
import logoImg from '../../img/Знімок_екрана_2024-02-25_053653-removebg-preview.png'
import FavoriteIcon from '@mui/icons-material/Favorite';


const ShopLogo = ({ openForm, favlist, openFavList }) => {
    return (
        <div id='logo'>
            <img src={logoImg}></img>
            <h1>AleeButka</h1>

            {favlist.length !== 0 ?
                <div id='favBtn'>
                    <p>{favlist.length}</p>
                    <FavoriteIcon id='FavoriteIconHeader' onClick={() => { openFavList(); }} />
                </div> : ''
            }

            <div id='addProduct'>
                <button onClick={() => { openForm() }}>Add product</button>
            </div>
        </div>
    );
}

export default ShopLogo;

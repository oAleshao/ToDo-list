import React from 'react';
import './style.css';
import logoImg from '../../img/Знімок_екрана_2024-02-25_053653-removebg-preview.png'

const ShopLogo = ({ openForm }) => {
    return (
        <div id='logo'>
            <img src={logoImg}></img>
            <h1>AleeButka</h1>
            <div id='addProduct'>
                <button onClick={() => { openForm() }}>Add product</button>
            </div>
        </div>
    );
}

export default ShopLogo;

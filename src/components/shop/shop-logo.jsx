import React from 'react';
import './style.css';
import logoImg from '../../img/Знімок_екрана_2024-02-25_053653-removebg-preview.png'

const ShopLogo = () => {
    return (
        <div id='logo'>
            <img src={logoImg}></img>
            <h1>AleeButka</h1>
        </div>
    );
}

export default ShopLogo;

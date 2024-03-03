import React, { useState } from 'react';

const ProductAdd = ({ createProduct }) => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const Show = () => {
        console.log(`${title} ${category} ${description} ${price} ${image}`);
    }

    const LoadImage = (file) => {
        var reader = new FileReader();

        reader.onloadend = function () {
            setImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage('');
        }
    }

    return (
        <div id='addProductBody'>
            <h1>Add product</h1>
            <div className='productField'>
                <span>Title</span>
                <input onChange={(e) => { setTitle(e.target.value) }}></input>
            </div>
            <div className='productField'>
                <span>Category</span>
                <input onChange={(e) => { setCategory(e.target.value) }}></input>
            </div>
            <div className='productField'>
                <span>Description</span>
                <input onChange={(e) => { setDescription(e.target.value) }}></input>
            </div>
            <div className='productField'>
                <span>Price</span>
                <input type='number' onChange={(e) => { setPrice(e.target.value) }}></input>
            </div>
            <div className='productField'>
                <span>Image</span>
                <input type='file' onChange={(e) => { LoadImage(e.target.files[0]) }} accept='image.'></input>
            </div>
            <div id='btnAdd'>
                <button onClick={() => { createProduct(title, category, description, price, image) }}>Add</button>
            </div>
        </div>
    );
}

export default ProductAdd;

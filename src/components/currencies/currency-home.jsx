import React, { useState } from 'react';
import listCurrency from '../currencies/currency';
import OprtionCur from './oprtion-cur';
import convert from './convert.mjs';
import './currencies.css';

const CurrencyHome = () => {

    const [allCurrency, setAllCurrency] = useState(listCurrency);
    const [fromCur, setFromCur] = useState('uah');
    const [startAmount, setStartAmount] = useState(0);
    const [toCur, setToCur] = useState('usd');
    const [endAmount, setEndAmount] = useState(0);



    return (
        <div id='mainDivCur'>
            <h1>Currency</h1>
            <div>
                <input type='number' value={startAmount}
                    onChange={(e) => {
                        setStartAmount(e.target.value);
                        let tmp = !e.target.value ? 0 : e.target.value;
                        setEndAmount(convert(fromCur, toCur, tmp));
                    }}></input>
                <select onChange={(e) => {
                    setFromCur(e.target.value);
                    let tmp = e.target.value;
                    setEndAmount(convert(tmp, toCur, startAmount));
                }}>
                    {allCurrency.map((cur) => (<OprtionCur {...cur} key={cur.id} />))}
                </select>
            </div>
            <div>
                <input type='number' value={endAmount}
                    onChange={(e) => {
                        setEndAmount(e.target.value);
                        let tmp = !e.target.value ? 0 : e.target.value;
                        setStartAmount(convert(toCur, fromCur, tmp));
                    }}></input>
                <select defaultValue={'usd'} onChange={(e) => {
                    setToCur(e.target.value);
                    let tmp = e.target.value;
                    setEndAmount(convert(fromCur, tmp, startAmount));
                }}>
                    {allCurrency.map((cur) => (<OprtionCur {...cur} key={cur.id} />))}
                </select>
            </div>
        </div >
    );
}

export default CurrencyHome;

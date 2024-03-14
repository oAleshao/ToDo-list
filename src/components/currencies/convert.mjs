import listCurrency from '../currencies/currency.js'


export default (from, to, value) => {

    const curFrom = listCurrency.filter((obj) => obj.id === from);

    if (from === to)
        return value;

    if (to === 'usd') {
        return Number((value * curFrom[0].toDollar).toFixed(2));
    }

    const curTo = listCurrency.filter((obj) => obj.id === to);

    return Number((value * curFrom[0].toDollar * curTo[0].toCurrent).toFixed(2));



}
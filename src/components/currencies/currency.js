
// 1000 uah <-> 26.04 usd <-> 97.66 sar
// 1000 uah <-> 26.04 usd <-> 23.56 eur or 23.78 eur

const listCurrency = [
    {
        id: 'uah',
        title: 'Украинская гривна',
        toDollar: '0.026042',
        toCurrent: '38.40'
    },
    {
        id: 'sar',
        title: 'Саудовский риял',
        toDollar: '0.266',
        toCurrent: '3.75'
    },
    // {
    //     id: 'eur',
    //     title: 'Евро',
    //     toDollar: '0,9149',
    //     toCurrent: '1.09'
    // },
    {
        id: 'aed',
        title: 'Дирхам ОАЭ',
        toDollar: '0.27248',
        toCurrent: '3.67'
    },
    {
        id: 'usd',
        title: 'Доллар США',
        toDollar: '1',
        toCurrent: '1'
    },
];

export default listCurrency;
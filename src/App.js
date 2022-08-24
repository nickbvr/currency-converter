import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './styles/GlobalStyles';

const baseURL = 'https://api.apilayer.com/exchangerates_data/latest';

const App = () => {
    const [currencies, setCurrencies] = useState([]);
    const [convertFrom, setConvertFrom] = useState();
    const [convertTo, setConvertTo] = useState();
    const [exchangeRate, setExchangeRate] = useState(0);
    const [usdToUahRate, setUsdToUahRate] = useState();
    const [eurToUahRate, setEurToUahRate] = useState();
    const [amount, setAmount] = useState(0);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    let toAmount, fromAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    } else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(() => {
        const getData = async () => {
            const headers = { apikey: 'NclmKi9tsiZKmhZBJbpr9cLbFFzVa8NA' };
            const { data } = await axios.get(baseURL, { headers });
            const firstCurrency = Object.keys(data.rates)[Object.keys(data.rates).indexOf('UAH')];
            setCurrencies(Object.keys(data.rates));
            setConvertFrom(data.base);
            setConvertTo(firstCurrency);
            setUsdToUahRate(
                data.rates[firstCurrency] /
                    data.rates[Object.keys(data.rates)[Object.keys(data.rates).indexOf('USD')]],
            );
            setEurToUahRate(data.rates[firstCurrency]);
            setExchangeRate(data.rates[firstCurrency]);
        };
        getData();
    }, []);

    useEffect(() => {
        if (convertFrom && convertTo) {
            const updData = async () => {
                const headers = { apikey: 'NclmKi9tsiZKmhZBJbpr9cLbFFzVa8NA' };
                const { data } = await axios.get(
                    `${baseURL}?base=${convertFrom}&symbols=${convertTo}`,
                    { headers },
                );
                setExchangeRate(data.rates[convertTo]);
            };
            updData();
        }
    }, [convertFrom, convertTo]);

    const handleFromChangeAmount = (e) => {
        let value = e.target.value;
        if (value < 0) value = 0;
        setAmount(value);
        setAmountInFromCurrency(true);
    };
    const handleToChangeAmount = (e) => {
        let value = e.target.value;
        if (value < 0) value = 0;
        setAmount(value);
        setAmountInFromCurrency(false);
    };

    return (
        <>
            <GlobalStyle />
            <Header eurToUahRate={eurToUahRate} usdToUahRate={usdToUahRate} />
            <Main
                currencies={currencies}
                convertFrom={convertFrom}
                convertTo={convertTo}
                setConvertFrom={setConvertFrom}
                setConvertTo={setConvertTo}
                fromAmount={fromAmount}
                toAmount={toAmount}
                handleFromChangeAmount={handleFromChangeAmount}
                handleToChangeAmount={handleToChangeAmount}
            />
        </>
    );
};

export default App;

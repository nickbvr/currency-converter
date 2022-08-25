import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { instance } from './utils/instance';
import { getCurrency } from './utils/getCurrency';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
    const [currencies, setCurrencies] = useState([]);
    const [convertFrom, setConvertFrom] = useState();
    const [convertTo, setConvertTo] = useState();
    const [exchangeRate, setExchangeRate] = useState(0);
    const [usdToUahRate, setUsdToUahRate] = useState();
    const [eurToUahRate, setEurToUahRate] = useState();
    const [amount, setAmount] = useState(0);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
    const [isFetching, setIsFetching] = useState(true);

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
            const { data } = await instance.get('/latest');
            const firstCurrency = getCurrency(data, 'UAH');
            setCurrencies(Object.keys(data.rates));
            setConvertFrom(data.base);
            setConvertTo(firstCurrency);
            setUsdToUahRate(data.rates[firstCurrency] / data.rates[getCurrency(data, 'USD')]);
            setEurToUahRate(data.rates[firstCurrency]);
            setExchangeRate(data.rates[firstCurrency]);
        };
        getData();
    }, []);

    useEffect(() => {
        if (convertFrom && convertTo) {
            const updData = async () => {
                setIsFetching(true);
                const { data } = await instance.get(
                    '/latest?base=' + convertFrom + '&symbols=' + convertTo,
                );
                setExchangeRate(data.rates[convertTo]);
                setIsFetching(false);
            };
            updData();
        }
    }, [convertFrom, convertTo]);

    const handleFromChangeAmount = (e) => {
        let value = e.target.value;
        value < 0 && (value = 0);
        setAmount(value);
        setAmountInFromCurrency(true);
    };
    const handleToChangeAmount = (e) => {
        let value = e.target.value;
        value < 0 && (value = 0);
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
                isFetching={isFetching}
                handleFromChangeAmount={handleFromChangeAmount}
                handleToChangeAmount={handleToChangeAmount}
            />
        </>
    );
};

export default App;

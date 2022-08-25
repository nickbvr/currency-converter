import { CurrencyExchangeRounded } from '@mui/icons-material';
import { Container, Box, Divider, CircularProgress } from '@mui/material';
import CurrencyRow from './CurrencyRow';

const Main = ({
    currencies,
    convertTo,
    convertFrom,
    setConvertFrom,
    setConvertTo,
    fromAmount,
    toAmount,
    handleToChangeAmount,
    handleFromChangeAmount,
    isFetching,
}) => {
    const handleSwapCurrencies = () => {
        if (!isFetching) {
            setConvertTo(convertFrom);
            setConvertFrom(convertTo);
        }
    };

    if (!currencies.length)
        return (
            <CircularProgress
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                }}
            />
        );
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                height: 'calc(100vh - 48px)',
            }}>
            <Box
                sx={{
                    borderRadius: '10px',
                    boxShadow: 'rgb(0 0 0 / 16%) 0 10px 36px 0, rgb(0 0 0 / 6%) 0 0 0 1px',
                    position: 'absolute',
                }}>
                <CurrencyRow
                    currencies={currencies}
                    selectedCurrency={convertFrom}
                    onChangeCurrency={(e) => setConvertFrom(e.target.value)}
                    amount={fromAmount}
                    onChangeAmount={handleFromChangeAmount}
                    isFetching={isFetching}
                />
                <Divider />
                <CurrencyExchangeRounded
                    onClick={handleSwapCurrencies}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        backgroundColor: '#fff',
                        fill: 'rgba(0, 0, 0, 0.15)',
                        transition: '.3s',
                        cursor: 'pointer',
                        '&:hover': {
                            fill: 'inherit',
                        },
                    }}
                />
                <CurrencyRow
                    currencies={currencies}
                    selectedCurrency={convertTo}
                    onChangeCurrency={(e) => setConvertTo(e.target.value)}
                    amount={toAmount}
                    isFetching={isFetching}
                    onChangeAmount={handleToChangeAmount}
                />
            </Box>
        </Container>
    );
};

export default Main;

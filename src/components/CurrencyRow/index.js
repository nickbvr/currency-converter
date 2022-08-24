import { MenuItem } from '@mui/material';
import { CurrencyWrapper, CurrencySelect, CurrencyInput } from './CurrencyRow.styles';

const CurrencyRow = ({
    selectedCurrency,
    onChangeCurrency,
    currencies,
    amount,
    onChangeAmount,
}) => {
    return (
        <CurrencyWrapper>
            <CurrencySelect
                value={!selectedCurrency ? '' : selectedCurrency}
                onChange={onChangeCurrency}
                variant='standard'
                disableUnderline>
                {currencies.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                        {currency}
                    </MenuItem>
                ))}
            </CurrencySelect>
            <CurrencyInput
                placeholder='0'
                variant='standard'
                type='number'
                value={!amount ? '' : amount.length ? amount : Number(amount).toFixed(2)}
                onChange={onChangeAmount}
                InputProps={{
                    disableUnderline: true,
                    inputProps: { sx: { textAlign: 'end', fontSize: 20 } },
                }}
            />
        </CurrencyWrapper>
    );
};

export default CurrencyRow;

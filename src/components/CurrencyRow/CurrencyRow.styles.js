import styled from '@emotion/styled';
import { Paper, Select, TextField } from '@mui/material';

export const CurrencyWrapper = styled(Paper)`
    padding: 20px;
    border-radius: 10px;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CurrencySelect = styled(Select)`
    font-size: 20px;
    > div {
        padding: 0 24px 0 0;
        &:focus {
            background-color: unset;
        }
    }
`;

export const CurrencyInput = styled(TextField)``;

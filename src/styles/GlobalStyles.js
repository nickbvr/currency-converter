import { Global, css } from '@emotion/react';
import normalize from 'normalize.css';

export const GlobalStyle = () => (
    <Global
        styles={css`
            ${normalize}
        `}
    />
);

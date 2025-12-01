import { styled } from '@mui/material/styles';
import type {MarketButtonProps} from "./MarketButton.tsx";

export const StyledMarketButton = styled('button', {
    shouldForwardProp: prop => prop !== 'long'
})<MarketButtonProps>(({ long }) => ({
    fontFamily: 'Geist',
    fontSize: '14px',
    fontWeight: 500,
    color: long ? '#97FCA6' : '#FF583A',
    backgroundColor: long
        ? 'rgba(151, 252, 166, 0.1)'
        : 'rgba(255, 88, 58, 0.1)',
    width: '100%',
    borderRadius: '10px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.07s ease-out',

    '&:active': {
        transform: 'scale(0.95)'
    }
}));

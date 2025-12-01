import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import Box from '@mui/material/Box';


export const Wrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const IntPart = styled('span')({
    fontFamily: 'Geist',
    fontSize: '30px',
    color: 'white'
});

export const DecimalPart = styled('span')({
    fontFamily: 'Geist',
    fontSize: '30px',
    color: 'gray'
});

export const Difference = styled('span', {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'difference'
})<{ difference: string }>(({ difference }) => ({
    fontFamily: 'Geist',
    fontSize: '18px',
    marginLeft: '8px',
    color: difference.startsWith('+')
        ? 'rgba(151, 252, 166, 0.9)'
        : 'rgba(252,151,170,0.9)'
}));
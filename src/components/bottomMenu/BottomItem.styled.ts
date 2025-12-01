
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BottomItemWrapper = styled('button')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
    padding: 0
}));

export const IconWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isActive'
})<{ isActive?: boolean }>(({ isActive }) => ({
    display: 'flex',
    width: '36px',
    height: '36px',
    borderRadius: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    background: isActive
        ? 'linear-gradient(to bottom, rgba(151, 252, 166, 0.15), rgba(246, 201, 15, 0.15))'
        : 'transparent'
}));

export const Label = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isActive'
})<{ isActive?: boolean }>(({ isActive }) => ({
    fontSize: '10px',
    fontWeight: 500,
    fontFamily: 'Geist',
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.5)'
}));

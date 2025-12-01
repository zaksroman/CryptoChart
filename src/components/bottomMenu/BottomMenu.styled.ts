import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BottomMenuWrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    backgroundColor: 'rgba(30, 30, 30, 1)',
    padding: '5px 12px',
    justifyContent: 'center',
    alignItems: 'center'
});

export const BottomMenuInner = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 45
});

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const AddPositionWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '12px',
    paddingRight: '12px',
    backgroundColor: 'rgba(30, 30, 30, 1)',
    borderRadius: '10px 10px 0 0',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    marginTop: 'auto'
});


export const TopRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '8px',
    paddingBottom: '8px'
});


export const PositionTitle = styled('span')({
    fontFamily: 'Geist',
    fontWeight: 400,
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    marginRight: '30px'
});


export const ArrowButton = styled('button')({
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    border: 'none',
    padding: 0,
    cursor: 'pointer'
});


export const ArrowIcon = styled('img', {
    shouldForwardProp: prop => prop !== 'isOpen'
})<{ isOpen: boolean }>(({ isOpen }) => ({
    width: 14,
    height: 14,
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: '0.2s ease'
}));


export const DropdownWrapper = styled(Box, {
    shouldForwardProp: prop => prop !== 'isOpen'
})<{ isOpen: boolean }>(({ isOpen }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    overflow: 'hidden',
    maxHeight: isOpen ? '80px' : '0px',
    opacity: isOpen ? 1 : 0,
    transition: 'max-height 0.3s, opacity 0.15s ease',
    paddingTop: isOpen ? '8px' : '0px',
    paddingBottom: isOpen ? '8px' : '0px'
}));


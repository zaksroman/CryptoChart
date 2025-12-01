import { styled } from '@mui/material/styles';

export const StyledTimeFrameButton = styled('button', {
    shouldForwardProp: prop => prop !== 'isSelected'
})<{isSelected: boolean}>(({ isSelected }) => ({
    flex: 1,
    height: '28px',
    width: '100%',
    fontFamily: 'Geist',
    fontSize: '12px',
    fontWeight: 400,
    cursor: 'pointer',
    borderRadius: '8px',

    color: isSelected ? 'rgba(244, 164, 44, 1)' : 'white',
    backgroundColor: isSelected
        ? 'rgba(244, 164, 44, 0.05)'
        : 'rgba(34, 34, 34, 1)',
    border: isSelected ? '1px solid rgba(236, 189, 117, 1)' : 'none'
}));
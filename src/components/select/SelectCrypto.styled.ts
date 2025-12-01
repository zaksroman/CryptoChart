import { styled } from '@mui/material/styles'
import {
    Box,
    MenuItem,
    Select,
} from '@mui/material'

export const StyledSelect = styled(Select<string>, {
    shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>(({ isOpen }) => ({
    width: '207px',
    height: '36px',
    backgroundColor: '#222222',
    color: 'white',
    borderRadius: '12px',
    borderBottomLeftRadius: isOpen ? 0 : '12px',
    borderBottomRightRadius: isOpen ? 0 : '12px',
    fontFamily: 'Geist',
    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center'
    }
}))

export const StyledMenuPaper = {
    sx: {
        backgroundColor: '#222222',
        mt: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px'
    }
}

export const RenderBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
    fontFamily: 'Geist'
})

export const StyledMenuItem = styled(MenuItem)({
    color: 'white',
    backgroundColor: '#222222',
    fontSize: 12,
    fontFamily: 'Geist',
    '&:hover': { backgroundColor: '#333333' }
})

export const ItemRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 6
})
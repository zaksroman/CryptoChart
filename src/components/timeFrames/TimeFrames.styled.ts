import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const ButtonsRoot = styled(Box)({
    display: 'flex',
    width: '100%',
    padding: '5px 12px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ButtonsRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '8px',
})
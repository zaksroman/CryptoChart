import {styled} from "@mui/material";
import Box from "@mui/material/Box";

export const HeaderContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '12px',
    padding: '10px',
    boxSizing: 'border-box',

    '& .topRow': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    '& .bottomRow': {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    '& .actions': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '8px',
    },
}));
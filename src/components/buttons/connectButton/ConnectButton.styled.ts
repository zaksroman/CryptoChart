import { styled } from '@mui/material/styles';


export const WalletConnectedButton = styled('button')({
    display: 'flex',
    flexDirection: 'row',
    width: '147px',
    height: '36px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'transparent',
    padding: 0,
    overflow: 'hidden',
    cursor: 'pointer'
});


export const WalletAddress = styled('span')({
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: 'white',
    fontFamily: 'Geist',
    fontWeight: 500
});


export const WalletIconWrapper = styled('div')({
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, rgba(151,252,166,1), rgba(246,201,15,1))'
});

export const WalletIconImg = styled('img')({
    width: '16px',
    height: '16px'
});


export const ConnectWalletButton = styled('button')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, rgba(151,252,166,0.15), rgba(246,201,15,0.15))',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    fontSize: '12px',
    fontWeight: 500,
    cursor: 'pointer',
    width: '111px',
    height: '36px'
});

export const ConnectWalletText = styled('span')({
    backgroundImage: 'linear-gradient(to bottom, rgba(151,252,166,1), rgba(246,201,15,1))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 500,
    fontFamily: 'Geist'
});
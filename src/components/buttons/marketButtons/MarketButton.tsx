
interface MarketButtonProps {
    long?: boolean;
}

const MarketButton = ({ long }: MarketButtonProps) => (
    <button
        style={{
            fontFamily: 'Geist',
            fontSize: '14px',
            fontWeight: 500,
            color: long ? '#97FCA6' : '#FF583A',
            backgroundColor: long ? 'rgba(151, 252, 166, 0.1)' : 'rgba(255, 88, 58, 0.1)',
            width: '100%',
            borderRadius: '10px',
            height: '36px',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        onClick={() => console.log(long ? 'Long' : 'Short')}
    >
        {long ? 'Long' : 'Short'}
    </button>
);

export default MarketButton;

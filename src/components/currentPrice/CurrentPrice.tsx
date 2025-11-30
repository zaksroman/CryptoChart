import Box from "@mui/material/Box";

const mockPrice = {
    price: '113610.07',
    change: '2.3',
};

const formatPrice = (price: string) => {

    const [intPart, decimalPart] = price.split('.');

    const intWithCommas = Number(intPart).toLocaleString('en-US');

    return { intWithCommas, decimalPart };
};

const CurrentPrice = () => {

    const { intWithCommas, decimalPart } = formatPrice(mockPrice.price);

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{ fontFamily: 'Geist', fontSize: '30px', color: 'white' }}>
                {intWithCommas}
            </span>
            <span style={{ fontFamily: 'Geist', fontSize: '30px', color: 'gray' }}>
                .{decimalPart}
            </span>
            <span style={{ fontFamily: 'Geist', fontSize: '18px', marginLeft: '8px', color: 'green' }}>
                +{mockPrice.change}%
            </span>
        </Box>
    );
};

export default CurrentPrice;

import Box from "@mui/material/Box";
import {useCurrentPriceStore} from "../../hooks/store/store.ts";

const formatPrice = (price: string) => {

    const [intPart, decimalPart] = price.split('.');

    const intWithCommas = Number(intPart).toLocaleString('en-US');

    return { intWithCommas, decimalPart };
};

const CurrentPrice = () => {

    const price = useCurrentPriceStore(store => store.price);
    const difference = useCurrentPriceStore(store => store.difference);

    const { intWithCommas, decimalPart } = formatPrice(price);

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{ fontFamily: 'Geist', fontSize: '30px', color: 'white' }}>
                {intWithCommas}
            </span>
            <span style={{ fontFamily: 'Geist', fontSize: '30px', color: 'gray' }}>
                .{decimalPart}
            </span>
            <span style={{
                fontFamily: 'Geist',
                fontSize: '18px',
                marginLeft: '8px',
                color: difference.startsWith('+') ? 'rgba(151, 252, 166, 0.9)' : 'rgba(252,151,170,0.9)' }}
            >
                {difference}%
            </span>
        </Box>
    );
};

export default CurrentPrice;

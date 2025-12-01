import {useCurrentPriceStore} from "../../hooks/store/store.ts";
import {DecimalPart, Difference, IntPart, Wrapper} from "./CurrentPrice.styled.ts";

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
        <Wrapper>
            <IntPart>{intWithCommas}</IntPart>
            <DecimalPart>.{decimalPart}</DecimalPart>
            <Difference difference={difference}>{difference}%</Difference>
        </Wrapper>
    );
};

export default CurrentPrice;

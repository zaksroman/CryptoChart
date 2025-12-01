import {StyledMarketButton} from "./MarketButton.styled.ts";

export interface MarketButtonProps {
    long?: boolean;
}

const MarketButton = ({ long }: MarketButtonProps) => (
    <StyledMarketButton long={long} onClick={() => console.log(long ? 'Long' : 'Short')}>
        {long ? 'Long' : 'Short'}
    </StyledMarketButton>
);

export default MarketButton;

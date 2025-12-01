import {StyledTimeFrameButton} from "./TimeFrameButton.styled.ts";

interface TimeFrameButtonProps {
    logo: string;
    onClick: () => void;
    isSelected: boolean;
}

const TimeFrameButton = ({ logo, onClick, isSelected }: TimeFrameButtonProps) => (
    <StyledTimeFrameButton onClick={onClick} isSelected={isSelected}>
        {logo}
    </StyledTimeFrameButton>
);

export default TimeFrameButton;
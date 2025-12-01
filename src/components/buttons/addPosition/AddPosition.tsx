import CustomButton from "../serviceButtons/CustomButton.tsx";
import {selectArrIcon} from "../../../assets";
import {useState} from "react";
import MarketButton from "../marketButtons/MarketButton.tsx";
import {
    AddPositionWrapper,
    ArrowButton,
    ArrowIcon,
    DropdownWrapper,
    PositionTitle,
    TopRow
} from "./AddPosition.styled.ts";

const AddPosition = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AddPositionWrapper>

            <TopRow>
                <PositionTitle>Position details</PositionTitle>
                <CustomButton
                    logo={'Margin $10'}
                    onClick={() => console.log('Margin $10')}
                />
                <CustomButton
                    logo={'Leverage 10x'}
                    onClick={() => console.log('Leverage 10x')}
                />
                <ArrowButton onClick={() => setIsOpen(prev => !prev)}>
                    <ArrowIcon src={selectArrIcon} alt="" isOpen={isOpen} />
                </ArrowButton>
            </TopRow>

            <DropdownWrapper isOpen={isOpen}>
                <MarketButton long />
                <MarketButton />
            </DropdownWrapper>

        </AddPositionWrapper>
    );
};

export default AddPosition;
import {StyledCustomButton} from "./CustomButton.styled.ts";

interface CustomButtonProps {
    logo: string;
    onClick: ()=>void;
}

const CustomButton = ({logo, onClick}:CustomButtonProps) => (
    <StyledCustomButton onClick={onClick}>{logo}</StyledCustomButton>
);

export default CustomButton;
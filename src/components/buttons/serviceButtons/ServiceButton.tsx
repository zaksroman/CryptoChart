import {StyledServiceButton} from "./ServiceButton.styled.ts";


interface ServiceButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const ServiceButton = ({ children, onClick }: ServiceButtonProps) =>(
    <StyledServiceButton onClick={onClick}>{children}</StyledServiceButton>
);

export default ServiceButton;
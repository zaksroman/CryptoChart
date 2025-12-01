import {BottomItemWrapper, IconWrapper, Label} from "./BottomItem.styled.ts";


interface BottomItemProps {
    name: string,
    logo: string,
    isActive?: boolean,
}

export const BottomItem = ({ name, logo, isActive }: BottomItemProps) => {
    return (
        <BottomItemWrapper >
            <IconWrapper isActive={isActive}>
                <img src={logo} alt="logo" width={19} height={19} />
            </IconWrapper>
            <Label isActive={isActive}>{name}</Label>
        </BottomItemWrapper>
    );
};

export default BottomItem;
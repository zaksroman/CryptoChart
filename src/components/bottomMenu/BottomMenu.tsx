import {navigationPositionIcon, navigationProfileIcon, navigationRewardIcon, navigationTradeIcon} from "../../assets";
import BottomItem from "./BottomItem.tsx";
import {BottomMenuInner, BottomMenuWrapper} from "./BottomMenu.styled.ts";

const bottomMenuConfig = [
    {
        name: 'Trade',
        logo: navigationTradeIcon,
        isActive: true,
    },
    {
        name: 'Position',
        logo: navigationPositionIcon,
    },
    {
        name: 'Rewards',
        logo: navigationRewardIcon,
    },
    {
        name: 'Profile',
        logo: navigationProfileIcon,
    }
]

const BottomMenu = () => (
        <BottomMenuWrapper>
            <BottomMenuInner>
                {bottomMenuConfig.map((config) => (
                    <BottomItem
                        key={config.name}
                        name={config.name}
                        logo={config.logo}
                        isActive={config.isActive}
                    />
                ))}
            </BottomMenuInner>
        </BottomMenuWrapper>
    );

export default BottomMenu;
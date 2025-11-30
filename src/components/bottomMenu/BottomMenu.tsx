import Box from "@mui/material/Box";
import {navigationPositionIcon, navigationProfileIcon, navigationRewardIcon, navigationTradeIcon} from "../../assets";
import BottomItem from "./BottomItem.tsx";

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

const BottomMenu = () => {
    return (
        <Box sx={{
            display: "flex",
            width: '100%',
            backgroundColor: 'rgba(30, 30, 30, 1)',
            padding: '5px 12px',
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 5,
            }}>
                {bottomMenuConfig.map((config) => (
                    <BottomItem
                        key={config.name}
                        name={config.name}
                        logo={config.logo}
                        isActive={config.isActive}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default BottomMenu;
import SelectCrypto from "./components/select/SelectCrypto.tsx";
import Box from "@mui/material/Box";
import Container from "./components/containers/Container.tsx";
import { btcIcon } from "./assets";
import ConnectButton from "./components/buttons/connectButton/ConnectButton.tsx";
import LikeButton from "./components/buttons/serviceButtons/LikeButton.tsx";
import SettingButton from "./components/buttons/serviceButtons/SettingButton.tsx";
import CurrentPrice from "./components/currentPrice/CurrentPrice.tsx";
import AddPosition from "./components/buttons/addPosition/AddPosition.tsx";
import BottomMenu from "./components/bottomMenu/BottomMenu.tsx";
import CryptoChart from "./components/chart/CryptoChart.tsx";
import TimeFrames from "./components/timeFrames/TimeFrames.tsx";
import {HeaderContainer} from "./App.styled.ts";

function App() {

    const menuItems = [
        {
            name: 'BTC/USDC',
            logo: btcIcon,
        },
        {
            name: 'ETH/USDC',
            logo: btcIcon,
        },
        {
            name: 'SOL/USDC',
            logo: btcIcon,
        }
    ]

    return (
        <Container>
            <HeaderContainer>
                <Box className="topRow">
                    <SelectCrypto menuItems={menuItems}/>
                    <ConnectButton/>
                </Box>

                <Box className="bottomRow">
                    <CurrentPrice/>
                    <Box className="actions">
                        <LikeButton/>
                        <SettingButton/>
                    </Box>
                </Box>
            </HeaderContainer>

            <CryptoChart/>
            <TimeFrames/>
            <AddPosition/>
            <BottomMenu/>
        </Container>
  )
}

export default App

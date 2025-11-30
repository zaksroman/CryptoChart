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
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '12px',
                padding: '10px',
                boxSizing: 'border-box',
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <SelectCrypto menuItems={menuItems}/>
                    <ConnectButton/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between'
                }}>
                    <CurrentPrice/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '8px'
                    }}>
                        <LikeButton/>
                        <SettingButton/>
                    </Box>
                </Box>
            </Box>

            <CryptoChart/>
            <AddPosition/>
            <BottomMenu/>
        </Container>
  )
}

export default App

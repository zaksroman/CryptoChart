import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import {useTrimAddress} from "../../../hooks/helpers/useTrimAddress.ts";
import {walletIcon} from "../../../assets";
import {
    ConnectWalletButton, ConnectWalletText,
    WalletAddress,
    WalletConnectedButton,
    WalletIconImg,
    WalletIconWrapper
} from "./ConnectButton.styled.ts";

const ConnectButton = () => {

    const {open} = useAppKit();
    const {disconnect} = useDisconnect();
    const {address} = useAppKitAccount();

    const trimUserAddress = useTrimAddress(address, 3, 3)

    const connectWallet = async () => {
        await open();
    };

    const disconnectWallet = () => {
        disconnect().then(() => console.log("Кошелек отключен"))
    };

    return (
        <>
            {address ? (
                <WalletConnectedButton onClick={disconnectWallet}>
                    <WalletAddress>{trimUserAddress}</WalletAddress>
                    <WalletIconWrapper>
                        <WalletIconImg src={walletIcon} alt="wallet icon"/>
                    </WalletIconWrapper>
                </WalletConnectedButton>
            ) : (
                <ConnectWalletButton onClick={connectWallet}>
                    <ConnectWalletText>ConnectWallet</ConnectWalletText>
                </ConnectWalletButton>
            )}
        </>
    );
}

export default ConnectButton;
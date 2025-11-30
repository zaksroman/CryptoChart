import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import {useTrimAddress} from "../../../hooks/helpers/useTrimAddress.ts";
import {walletIcon} from "../../../assets";

const ConnectButton = () => {

    const { open } = useAppKit();
    const { disconnect } = useDisconnect();
    const { address } = useAppKitAccount();

    const trimUserAddress= useTrimAddress(address, 3, 3)

    const connectWallet = async () => {
        await open();
    };

    const disconnectWallet = () => {
        disconnect().then(() => console.log("Кошелек отключен"))
    };

    return (
        <>
            {address ? (

                <button
                    onClick={() => disconnectWallet()}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "147px",
                        height: "36px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backgroundColor: "transparent",
                        padding: 0,
                        overflow: "hidden"
                    }}
                >
                    <span
                        style={{
                            width: "70%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            color: 'white',
                            fontFamily: 'Geist',
                            fontWeight: 500,
                        }}
                    >
                        {trimUserAddress}
                    </span>
                    <div
                        style={{
                            width: "30%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(to bottom, rgba(151, 252, 166, 1), rgba(246, 201, 15, 1))"
                        }}
                    >
                        <img
                            src={walletIcon}
                            alt="wallet icon"
                            style={{ width: "16px", height: "16px" }}
                        />
                    </div>
                </button>

            ) : (
                <button
                    onClick={() => connectWallet()}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "linear-gradient(to bottom , rgba(151, 252, 166, 0.15), rgba(246, 201, 15, 0.15))",
                        border: "none",
                        borderRadius: "12px",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: 500,
                        cursor: "pointer",
                        width: "111px",
                        height: "36px",
                    }}
                >
                    <span
                        style={{
                            backgroundImage: 'linear-gradient(to bottom , rgba(151, 252, 166, 1), rgba(246, 201, 15, 1))',
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            fontWeight: '500',
                            fontFamily: 'Geist'
                    }}
                    >
                        ConnectWallet
                    </span>
                </button>
            )}
        </>
    )
};

export default ConnectButton;

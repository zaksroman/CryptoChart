import { reownProjectId } from "../../const.ts"
import { createAppKit } from '@reown/appkit/react'
import { base } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from "react";
import { type Config, WagmiProvider } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const ReownProvider = ({children}: {children: ReactNode}) => {

    const queryClient = new QueryClient()

    if (!reownProjectId) {
        throw new Error('Progect ID is missing')
    }

    const metadata = {
        name: 'CryptoChart',
        description: 'CryptoChart',
        url: 'https://reown.com/appkit',
        icons: ['https://assets.reown.com/reown-profile-pic.png']
    }

    const networks: [typeof base] = [base]

    const wagmiAdapter = new WagmiAdapter({
        ssr: true,
        networks,
        projectId: reownProjectId
    })

    createAppKit({
        adapters: [wagmiAdapter],
        projectId: reownProjectId,
        networks,
        defaultNetwork: base,
        metadata,
        features: {
            analytics: false,
            email: false,
            socials: false
        }
    })

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default ReownProvider;
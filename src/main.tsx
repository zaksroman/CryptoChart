
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReownProvider from "./components/blockchain-context/ReownProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <ReownProvider>
        <App/>
    </ReownProvider>
)

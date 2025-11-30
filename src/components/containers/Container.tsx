import Box from "@mui/material/Box";
import {useViewportHeight} from "../../hooks/helpers/useViewportHeight.ts";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({children}:ContainerProps) => {

    useViewportHeight();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "390px",
            height: 'calc(var(--vh) * 100)',
            minHeight: "100vh",
            margin: "0 auto",
            boxSizing: 'border-box'
        }} >
            {children}
        </Box>
    );
};

export default Container;
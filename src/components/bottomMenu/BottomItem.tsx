import Box from "@mui/material/Box";

interface BottomItemProps {
    name: string,
    logo: string,
    isActive?: boolean,
}

const BottomItem = ({name, logo, isActive}:BottomItemProps) => {
    return (
        <button
            onClick={() => {}}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                cursor: "pointer",
        }}>
            <Box sx={{
                display: 'flex',
                width:'36px',
                height:'36px',
                background: isActive ? 'linear-gradient(to bottom, rgba(151, 252, 166, 0.15), rgba(246, 201, 15, 0.15))' : 'transparent',
                borderRadius: '12px',
                border: 'none',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src={logo} alt="logo" width={19} height={19} />
            </Box>
            <span style={{
                fontSize: '10px',
                color: isActive ? 'white' : 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                fontFamily: 'Geist'
            }}>
                {name}
            </span>
        </button>
    );
};

export default BottomItem;
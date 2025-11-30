import Box from "@mui/material/Box";
import CustomButton from "../serviceButtons/CustomButton.tsx";
import {selectArrIcon} from "../../../assets";
import {useState} from "react";
import MarketButton from "../marketButtons/MarketButton.tsx";

const AddPosition = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            paddingX: '12px',
            backgroundColor: 'rgba(30, 30, 30, 1)',
            borderRadius: '10px 10px 0 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingY: '8px',
            }}>
                <span style={{
                    fontFamily: 'Geist',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginRight: '30px'
                }}
                >
                    Position details
                </span>
                <CustomButton
                    logo={'Margin $10'}
                    onClick={()=> console.log('Margin $10')}
                />
                <CustomButton
                    logo={'Leverage 10x'}
                    onClick={()=> console.log('Leverage 10x')}
                />
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    style={{
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center'
                }}
                >
                    <img
                        src={selectArrIcon}
                        width={14}
                        height={14}
                        alt={''}
                        style={{
                            transform: isOpen ? 'rotate(0)' : 'rotate(180deg)',
                            transition: '0.2s ease',
                            alignItems: 'center',
                            justifyContent: 'center',
                    }}
                    />
                </button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
                overflow: 'hidden',
                maxHeight: isOpen ? '80px' : '0px',
                opacity: isOpen ? 1 : 0,
                transition: 'max-height 0.3s, opacity 0.15s ease',
                paddingY: isOpen ? '8px' : '0px'
            }}>
                <MarketButton long/>
                <MarketButton/>
            </Box>
        </Box>
    );
};

export default AddPosition;
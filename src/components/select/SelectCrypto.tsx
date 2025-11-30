
import { useState, useMemo } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { selectArrIcon } from '../../assets'

interface CryptoItem {
    name: string
    logo: string
}

interface SelectProps {
    menuItems: CryptoItem[]
}

const menuPaperSx = {
    backgroundColor: '#222222',
    mt: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px'
}

const SelectCrypto = ({ menuItems }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedName, setSelectedName] = useState(menuItems[0].name)

    const selectedItem = useMemo(
        () => menuItems.find(i => i.name === selectedName),
        [selectedName, menuItems]
    )

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedName(event.target.value)
    }

    return (
        <FormControl fullWidth>
            <Select
                value={selectedName}
                onChange={handleChange}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                IconComponent={() => null}
                sx={{
                    width: '207px',
                    height: '36px',
                    backgroundColor: '#222222',
                    color: 'white',
                    borderRadius: '12px',
                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                    borderBottomLeftRadius: isOpen ? 0 : '12px',
                    borderBottomRightRadius: isOpen ? 0 : '12px',
                }}
                MenuProps={{
                    PaperProps: { sx: menuPaperSx }
                }}
                renderValue={() => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 2,
                            width: '100%',
                            fontFamily: 'Geist',
                        }}
                    >
                        <img src={selectedItem!.logo} alt={''} width={24} height={24} />
                            <span style={{ fontSize: 12, fontWeight: 500 }}>
                                {selectedItem!.name}
                            </span>
                            <span style={{ fontSize: 10,fontWeight: 400, opacity: 0.5 }}>
                                100x
                            </span>
                        <img
                            src={selectArrIcon}
                            width={16}
                            height={16}
                            alt={''}
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                                transition: '0.2s ease'
                            }}
                        />
                    </Box>
                )}
            >
                {menuItems.map(item => (
                    <MenuItem
                        key={item.name}
                        value={item.name}
                        sx={{
                            color: 'white',
                            backgroundColor: '#222222',
                            '&:hover': { backgroundColor: '#333333' },
                            fontSize: 12,
                            fontFamily: 'Geist'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <img src={item.logo} alt={''} width={24} height={24} />
                            {item.name}
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectCrypto

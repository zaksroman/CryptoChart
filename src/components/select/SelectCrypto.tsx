
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { type SelectChangeEvent } from '@mui/material/Select'
import { selectArrIcon } from '../../assets'
import {ItemRow, RenderBox, StyledMenuItem, StyledMenuPaper, StyledSelect} from "./SelectCrypto.styled.ts";
interface CryptoItem {
    name: string
    logo: string
}

interface SelectProps {
    menuItems: CryptoItem[]
}

const SelectCrypto = ({ menuItems }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedName, setSelectedName] = useState(menuItems[0].name)

    const selectedItem = menuItems.find(i => i.name === selectedName)!

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedName(event.target.value)
    }

    return (
        <FormControl fullWidth>
            <StyledSelect
                value={selectedName}
                onChange={handleChange}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
                IconComponent={() => null}
                MenuProps={{ PaperProps: StyledMenuPaper }}
                renderValue={() => (
                    <RenderBox>
                        <img src={selectedItem.logo} width={24} height={24} alt='' />

                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                            {selectedItem.name}
                        </span>

                        <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.5 }}>
                            100x
                        </span>

                        <img
                            src={selectArrIcon}
                            width={16}
                            height={16}
                            alt=''
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                                transition: '0.2s ease'
                            }}
                        />
                    </RenderBox>
                )}
            >
                {menuItems.map(item => (
                    <StyledMenuItem key={item.name} value={item.name}>
                        <ItemRow>
                            <img src={item.logo} width={24} height={24} alt='' />
                            {item.name}
                        </ItemRow>
                    </StyledMenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    )
}

export default SelectCrypto

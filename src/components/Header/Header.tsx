import React from 'react'
import logo from '../../assets/logoWhite.png'
import { IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'

export type AnchorType = 'top'
export type VariantType = 'temporary' | 'persistent'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [variant, setVariant] = useState<VariantType>('temporary')
    const onClick = () => setIsOpen(true)
    const top: AnchorType = 'top'

    const toggleDrawer = (anchor: AnchorType, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setIsOpen(open)
    }

    return (
        <header className='z-20 flex px-3 justify-between items-center w-full h-[50px]'>
            <img className='w-[40px] h-[40px]' src={logo} />
            <IconButton onClick={onClick} sx={{ p: 0 }}>
                <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <SwipeableDrawer
                anchor={top}
                open={isOpen}
                onClose={toggleDrawer(top, false)}
                onOpen={toggleDrawer(top, true)}
                variant={variant}
            >
                <DrawerList setIsOpen={setIsOpen} setVariant={setVariant} />
            </SwipeableDrawer>
        </header>
    )
}

export default Header

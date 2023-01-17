import React from 'react'
import logo from '../../assets/logoWhite.png'
import { IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'

const Header = () => {
    const [open, setOpen] = useState<Boolean>(false)
    const onClick = () => setOpen(true)

    return (
        <header className='z-20 flex px-3 justify-between items-center w-full h-[50px]'>
            <img className='w-[40px] h-[40px]' src={logo} />
            <IconButton onClick={onClick} sx={{ p: 0 }}>
                <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <SwipeableDrawer
                anchor={'top'}
                open={open}
                // onClose={toggleDrawer(anchor, false)}
                // onOpen={toggleDrawer(anchor, true)}
                // onClick={setOpen(true)}
            >
                <DrawerList setOpen={setOpen} />
            </SwipeableDrawer>
        </header>
    )
}

export default Header

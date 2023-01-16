import React from 'react'
import logo from '../../assets/wildHerb2.png'
import { IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
    return (
        <header className='absolute z-20 flex px-3 justify-between items-center w-full h-[80px]'>
            <img className='w-[40px] h-[40px]' src={logo} />
            {/* <span className='italic text-lg'>botanica.tattoo.art</span> */}
            <IconButton>
                <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
        </header>
    )
}

export default Header

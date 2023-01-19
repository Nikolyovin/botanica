import { Box } from '@mui/material'
import React, { FC, Dispatch } from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import TabList from './TabList'
import { VariantType } from '../../types/types'

interface Iprops {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    setVariant: Dispatch<React.SetStateAction<VariantType>>
}

const DrawerList: FC<Iprops> = ({ setIsOpen, setVariant }) => {
    const onClick = () => setIsOpen(false)
    return (
        <Box sx={{ width: 'auto' }} role='presentation'>
            {/* <div className='flex justify-end items-center h-[50px]'>
                <IconButton onClick={onClick}>
                    <CloseIcon sx={{ fontSize: 32 }} />
                </IconButton>
            </div> */}
            <Divider />
            <TabList setIsOpen={setIsOpen} setVariant={setVariant} />
        </Box>
    )
}

export default DrawerList

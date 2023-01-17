import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC, Dispatch } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'

interface Iprops {
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

const DrawerList: FC<Iprops> = ({ setOpen }) => {
    const onClick = () => setOpen(false)
    return (
        <Box sx={{ width: 'auto' }} role='presentation'>
            <div className='flex justify-end items-center h-[50px]'>
                <IconButton onClick={onClick}>
                    <CloseIcon sx={{ fontSize: 32 }} />
                </IconButton>
            </div>
            <Divider />
            <List sx={{ p: 0 }}>
                {['Моё портфолио', 'Что нужно для записи?', 'Как со мной связаться?', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerList

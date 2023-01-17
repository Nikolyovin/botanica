import { useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const Drawer = () => {
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false
    // })

    const [open, setOpen] = useState<boolean>(false)

    // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    //     if (
    //         event &&
    //         event.type === 'keydown' &&
    //         ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    //     ) {
    //         return
    //     }

    //     // setState({ ...state, [anchor]: open })
    // }

    const list = () => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            sx={{ width: 'auto' }}
            role='presentation'
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Моё портфолио', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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

    return (
        <div>
            <>
                <Button onClick={() => setOpen(true)}>{'top'}</Button>
                <SwipeableDrawer
                    // anchor={'top'}
                    open={open}
                    // onClose={toggleDrawer(anchor, false)}
                    // onOpen={toggleDrawer(anchor, true)}
                    // onClick={setOpen(true)}
                >
                    {list()}
                </SwipeableDrawer>
            </>
        </div>
    )
}

export default Drawer

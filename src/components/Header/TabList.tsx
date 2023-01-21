import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-scroll'
import Divider from '@mui/material/Divider'
import ImageIcon from '@mui/icons-material/Image'
import CreateIcon from '@mui/icons-material/Create'
import { VariantType } from '../../types/types'

interface IButton {
    title: string
    icon: string
    href: string
}

interface Iprops {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setVariant: React.Dispatch<React.SetStateAction<VariantType>>
}

const TabList: React.FC<Iprops> = ({ setIsOpen, setVariant }) => {
    const arrButtons: IButton[] = [
        {
            href: 'portfolio',
            icon: 'ImageIcon',
            title: 'Моё портфолио'
        },
        {
            href: 'contactMeTop',
            icon: 'CreateIcon',
            title: 'Что нужно для записи?'
        },
        {
            href: 'contactMeBottom',
            icon: 'MailIcon',
            title: 'Как со мной связаться?'
        },
        {
            href: 'portfolio',
            icon: 'MailIcon',
            title: 'Drafts'
        }
    ]

    const onClick: () => void = () => {
        setVariant('persistent')
        setIsOpen(false)
        setVariant('temporary')
    }

    const findNameComponent = (icon: string) => {
        switch (icon) {
            case 'ImageIcon':
                return <ImageIcon />
            case 'CreateIcon':
                return <CreateIcon />
            case 'MailIcon':
                return <MailIcon />
            // case 'ImageIcon': return <ImageIcon/>
        }
    }

    return (
        <List sx={{ p: 0 }}>
            {arrButtons.map((item, index) => (
                <div className='' key={index}>
                    <Link to={item.href} smooth={true} duration={500} onClick={onClick}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{findNameComponent(item.icon)}</ListItemIcon>
                                {/* <ListItemText primary={item.title} /> */}
                                <span className='w-full'>{item.title}</span>
                            </ListItemButton>
                        </ListItem>
                        {/* <Divider variant='middle' /> */}
                    </Link>
                </div>
            ))}
        </List>
    )
}

export default TabList

import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll'
import { AnchorType, VariantType } from './Header'

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
            icon: 'test',
            title: 'Моё портфолио'
        },
        {
            href: 'contactMeTop',
            icon: 'test',
            title: 'Что нужно для записи?'
        },
        {
            href: 'ContactMeBottom',
            icon: 'test',
            title: 'Как со мной связаться?'
        },
        {
            href: 'portfolio',
            icon: 'test',
            title: 'Drafts'
        }
    ]

    const onClick: () => void = () => {
        setVariant('persistent')
        setIsOpen(false)
        setVariant('temporary')
    }
    return (
        <List sx={{ p: 0 }}>
            {arrButtons.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <Link to={item.href} smooth={true} duration={500}>
                            <ListItemText primary={item.title} onClick={onClick} />
                        </Link>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default TabList

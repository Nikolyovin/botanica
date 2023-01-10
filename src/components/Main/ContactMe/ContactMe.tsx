import React from 'react'
import { IconButton, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import vkIcon from '../../../assets/icon-vk.png'
import instagramIcon from '../../../assets/instagram.png'

const ContactMe = () => {
    return (
        <>
            <div className='px-3  z-0'>
                <Typography variant='h5'>Что нужно для записи?</Typography>
                <p className='mt-3 text-slate-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi. Tenetur accusantium
                    praesentium voluptas suscipit necessitatibus aliquid fugiat nemo? Reiciendis consequuntur, molestias
                    ipsam nihil repellendus fuga eaque? Tempore, tempora dicta?
                </p>
            </div>
            <div className='px-3 mt-6'>
                <Typography variant='h5'>Как со мной связаться?</Typography>
                <p className='mt-3 text-slate-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi.
                </p>
                <div className='flex justify-center'>
                    <IconButton size='large'>
                        <a href='https://vk.com/lyovina_tatt'>
                            <img className='w-[35px] h-[35px]' src={vkIcon} alt='vk' />
                        </a>
                    </IconButton>
                    <IconButton size='large'>
                        <a href='https://instagram.com/lyovina_tattoo?igshid=OGQ2MjdiOTE='>
                            <img className='w-[35px] h-[35px]' src={instagramIcon} alt='instagram' />
                        </a>
                    </IconButton>
                    <IconButton size='large'>
                        <a href='https://t.me/lyovina_tatt'>
                            <TelegramIcon fontSize='large' color='primary' />
                        </a>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default ContactMe

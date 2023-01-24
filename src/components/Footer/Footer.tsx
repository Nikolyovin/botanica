import { Divider } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material'
import vkIcon from '../../assets/vk2.png'
import instagramIcon from '../../assets/instagram2.png'
import tgIcon from '../../assets/telegram2.png'
import { Link } from 'react-scroll'
import { arrButtons } from '../common'

const Footer = () => {
    return (
        <footer className='bg-black py-7 pt-3 text-white'>
            <h6 className='text-white cinzelBold text-2xl text-center w-full'>Botanica.tattoo.art</h6>
            <div className='flex justify-center my-3'>
                <Divider variant='middle' sx={{ bgcolor: 'white', width: '100px' }} />
            </div>

            <ul className=' '>
                {arrButtons.map(({ href, title }) => (
                    <Link key={title} to={href} smooth={true} duration={500}>
                        <li className='text-center '>{title}</li>
                    </Link>
                ))}
                {/* <Link to={'portfolio'} smooth={true} duration={500}>
                    <li className='text-center '>Моё портфолио</li>
                </Link>
                <Link to={'contactMeTop'} smooth={true} duration={500}>
                    <li className='text-center '>Что нужно для записи?</li>
                </Link>
                <Link to={'contactMeButtom'} smooth={true} duration={500}>
                    <li className='text-center '>Как со мной связаться?</li>
                </Link>
                <Link to={'portfolio'} smooth={true} duration={500}>
                    <li className='text-center '>Drafts</li>
                </Link> */}
            </ul>

            {/* <div className='flex justify-center h-[35px] pt-6'>
                <IconButton size='large'>
                    <a href='https://vk.com/lyovina_tatt'>
                        <img className=' w-[35px] bg-white' src={vkIcon} alt='vk' />
                    </a>
                </IconButton>

                <IconButton size='large'>
                    <a href='https://instagram.com/lyovina_tattoo?igshid=OGQ2MjdiOTE='>
                        <img className='w-[35px] bg-white' src={instagramIcon} alt='instagram' />
                    </a>
                </IconButton>
                <IconButton size='large'>
                    <a href='https://t.me/lyovina_tatt'>
                        <img className='w-[35px] bg-white' src={tgIcon} alt='telegram' />
                    </a>
                </IconButton>
            </div> */}
        </footer>
    )
}

export default Footer

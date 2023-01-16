import { IconButton, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import vkIcon from '../../../assets/vk.png'
import instagramIcon from '../../../assets/instagram-black.png'
import tgIcon from '../../../assets/telegram.png'
import photo from '../../../assets/IMG_3393.jpg'

const ContactMeBottom = () => {
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', flex: 1, px: '20px', py: '60px' }}>
                Как со мной связаться?
            </Typography>
            <p className='text-slate-900 font-bold pb-[20px] px-[20px] '>
                Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений и учебных
                текстов.
            </p>

            <div className='flex justify-end '>
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
                        <img className='w-[35px] h-[35px]' src={tgIcon} alt='instagram' />
                    </a>
                </IconButton>
            </div>
        </>
    )
}

export default ContactMeBottom

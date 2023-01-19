import { IconButton, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import vkIcon from '../../../assets/vk.png'
import instagramIcon from '../../../assets/instagram-black.png'
import tgIcon from '../../../assets/telegram.png'
import photo from '../../../assets/IMG_3393.jpg'
import { Element } from 'react-scroll'

const ContactMeBottom = () => {
    return (
        <section>
            <Element name='contactMeBottom'>
                <h3 className='title flex-1 px-[20px] py-[60px]'>Как со мной связаться?</h3>
                <p className='text-slate-900 font-bold pb-[50px] px-[20px] text-[18px]'>
                    Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений и
                    учебных текстов.
                </p>

                <div className='flex justify-center pb-[50px]'>
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
            </Element>
        </section>
    )
}

export default ContactMeBottom

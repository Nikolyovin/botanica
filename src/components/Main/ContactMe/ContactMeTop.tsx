import React from 'react'
import { IconButton, Typography } from '@mui/material'
import photo from '../../../assets/IMG_3394.jpg'
import list2 from '../../../assets/list2.jpg'
import { Element } from 'react-scroll'

const ContactMeTop = () => {
    return (
        <Element name='contactMeTop'>
            <div className=' z-0 relative'>
                <img className=' object-contain ' src={photo} />
                <div className='absolute flex h-full flex-col top-0 px-[20px] py-[60px]'>
                    <h3 className='title text-white flex-1'>Что нужно для записи?</h3>
                    <div className='flex justify-between '>
                        <p className='text-sm text-white font-bold text-end'>
                            Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений
                            и учебных текстов. Для этого созданы другие замечательные учебники. У этой книги совсем иная
                            задача. Она поможет вам научиться не только разговаривать,Для этого созданы другие
                            замечательные учебники. У этой книги совсем иная задача.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default ContactMeTop

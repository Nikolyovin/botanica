import React from 'react'
import { IconButton, Typography } from '@mui/material'
import photo from '../../../assets/IMG_3394.jpg'
import list2 from '../../../assets/list2.jpg'

const ContactMeTop = () => {
    return (
        <div className=' z-0 relative'>
            <img className=' object-contain opacity-70' src={photo} />
            <div className='absolute flex h-full flex-col top-0 '>
                <Typography variant='h4' sx={{ fontWeight: 'bold', flex: 1, px: '20px', py: '60px' }}>
                    Что нужно для записи?
                </Typography>
                <div className='flex justify-between '>
                    <p className='text-lg font-bold pb-[60px] px-[20px] text-end'>
                        Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений и
                        учебных текстов. Для этого созданы другие замечательные учебники. У этой книги совсем иная
                        задача. Она поможет вам научиться не только разговаривать,Для этого созданы другие замечательные
                        учебники. У этой книги совсем иная задача.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactMeTop

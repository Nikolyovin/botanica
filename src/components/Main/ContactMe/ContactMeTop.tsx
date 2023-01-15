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
                    <p className='text-slate-900 font-bold pb-[60px] px-[20px] text-end'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi. Tenetur accusantium
                        praesentium voluptas suscipit necessitatibus aliquid fugiat nemo? Reiciendis consequuntur,
                        molestias ipsam nihil repellendus fuga eaque? Tempore, tempora dicta?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactMeTop

import React from 'react'
import Slideshow from './Slideshow'
import { Typography } from '@mui/material'
import logo from '../../../assets/wildHerb.png'

const Portfolio = () => {
    return (
        <div className='bg-slate-200 py-[50px] h-[100vh] px-3'>
            {/* <div className='mt-6 mb-10 '>
                <Typography variant='h5' sx={{ color: '#757575' }}>
                    Немного моих работ:
                </Typography>
            </div> */}
            <div className='flex items-start relative '>
                <Slideshow />
            </div>
            <div className='bg-white rounded-b-2xl'>
                <p className='text-slate-500 p-4 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam accusantium aperiam atque quae odio
                </p>
            </div>
        </div>
    )
}

export default Portfolio

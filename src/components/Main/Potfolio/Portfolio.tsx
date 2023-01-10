import React from 'react'
import Slideshow from './Slideshow'
import { Typography } from '@mui/material'

const Portfolio = () => {
    return (
        <div className='px-3 '>
            {/* <p className='mt-6 mb-3 text-2xl font-bold '>Мои работы</p> */}
            <div className='mt-6 mb-3 '>
                <Typography variant='h5'>Мои работы:</Typography>
            </div>
            <Slideshow />
        </div>
    )
}

export default Portfolio

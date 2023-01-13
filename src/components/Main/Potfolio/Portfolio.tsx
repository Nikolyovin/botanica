import React from 'react'
import Slideshow from './Slideshow'
import { Typography } from '@mui/material'

const Portfolio = () => {
    return (
        <div className='flex  items-center px-3 relative h-[100vh] '>
            {/* <p className='mt-6 mb-3 text-2xl font-bold '>Мои работы</p> */}
            {/* <div> */}
            {/* <div className='mt-6 mb-3 '>
                    <Typography variant='h5'>Мои работы:</Typography>
                </div> */}
            <Slideshow />
        </div>
        // </div>
    )
}

export default Portfolio

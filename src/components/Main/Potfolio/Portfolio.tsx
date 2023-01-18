import React from 'react'
import Slideshow from './Slideshow'
import { Typography } from '@mui/material'
import logo from '../../../assets/wildHerb.png'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll'

const Portfolio = () => {
    return (
        <Element name='portfolio'>
            <div className='bg-slate-200 py-[50px] h-[100vh] px-3'>
                <span className='title'>Моё портфолио</span>
                <div className='flex items-start relative '>
                    <Slideshow />
                </div>
                <div className='bg-white rounded-b-2xl'>
                    <p className='text-slate-500 p-4 '>
                        Для этого созданы другие замечательные учебники. У этой книги совсем иная задача.
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default Portfolio

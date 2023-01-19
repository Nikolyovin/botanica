import React from 'react'
import Slideshow from './Slideshow'
import { Typography } from '@mui/material'
import logo from '../../../assets/wildHerb.png'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll'

const Portfolio = () => {
    return (
        <section className='bg-slate-200 pt-[30px] pb-[60px] px-3'>
            <Element name='portfolio'>
                <h2 className='title'>Моё портфолио</h2>
                <div className='flex items-start relative pt-6'>
                    <Slideshow />
                </div>
                <div className='bg-white rounded-b-2xl'>
                    <p className='text-slate-500 p-4 '>
                        Для этого созданы другие замечательные учебники. У этой книги совсем иная задача.
                    </p>
                </div>
            </Element>
        </section>
    )
}

export default Portfolio

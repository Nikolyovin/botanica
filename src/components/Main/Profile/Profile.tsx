import { Divider } from '@mui/material'
import React from 'react'
import avatar from '../../../assets/avatar.jpg'
import { Typography } from '@mui/material'

const Profile = () => {
    return (
        // <div className='h-[100vh] overflow-hidden'>
        <section className=' '>
            <div className='relative'>
                <img className='object-cover object-top w-full z-10 h-[50vh]' src={avatar} alt='avatar' />
                <div className='bg-white z-1 bottom-[-1px] p-[10px] w-full rounded-t-2xl absolute'></div>
            </div>

            <div className=' bg-white  z-1 '>
                <div className='px-4 bg-white'>
                    <div className='mb-3 mt-[-10px]'>
                        <h1 className='title'>Виктория Лёвина</h1>
                        <h2 className=' amatic font-bold text-[25px] text-[#757575]'>Мастер Тату</h2>
                        <h2 className=' amatic font-bold text-[25px] text-[#757575]'>@botanica.tattoo.art</h2>
                    </div>

                    <Divider sx={{ width: '25%' }} />
                    <p className='mt-2 text-slate-500 '>Рязань, Москва</p>
                    {/* <div className='flex justify-between'> */}
                    <p className='mt-3 mb-2 text-slate-500'>
                        Привет! Меня зовут Виктория и я мастер тату. Также я являюсь членом Ассоциации Художников
                        Ботанического Искусства. Я очень люблю ботанику, и через свои работы чувствую гармонию с
                        природой.
                    </p>
                    <p className='mt-3 mb-6 text-slate-500'>
                        Я люблю создавать красоту на теле своих клиентов и заражать их своей энергией.Мои любимые стили
                        - это ботаника и микрореализм. Если вы хотите добавить что-то особенное в свою жизнь, давайте
                        создадим это вместе!
                    </p>
                </div>
                {/* <div className='bggImage w-[100vh] h-[200px] '></div> */}
            </div>
        </section>
    )
}

export default Profile

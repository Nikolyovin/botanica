import { Divider } from '@mui/material'
import React from 'react'
import avatar from '../../../assets/avatar.JPG'
import { Typography } from '@mui/material'
// import img1 from '../../../assets/1.png'

const Profile = () => {
	return (
		<div >
			<div className='relative'>
				<img
					className="object-cover object-top w-full z-10 h-[55vh]"
					// src="../../../assets/avatar.JPG"
					src={avatar}
				/>
				<div className='bg-white z-1 bottom-0 p-[7px] w-full rounded-t-2xl absolute'></div>
			</div>
			
			{/* <div className=" bg-white top-[47vh] bottom-[50vh]  z-1 absolute "> */}
			<div className=" bg-white  z-1  ">
				<div className="px-3 bg-white">
					{/* <h1 className=" my-3 text-3xl font-bold ">
						Виктория Лёвина
					</h1> */}
					<div className='mb-3'>
						<Typography variant='h4' sx={{fontWeight: 'bold'}}>Виктория Лёвина</Typography>
						<Typography variant='h6' sx={{color: '#757575'}}>@botanica.tattoo.art</Typography>
					</div>
					
					<Divider sx= {{width: '25%'}}/>
					<p className="mt-2 text-slate-500">Рязань, Москва</p>
					{/* <div className='flex justify-between'> */}
						<p className="mt-3 text-slate-500">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
							magnam totam nemo ullam ut neque unde eum optio accusantium
							necessitatibus quam, ipsa deserunt placeat repellendus numquam pariatur
							ratione, maxime libero.
						</p>
						{/* <img className="object-contain  w-[100px]" src={img1} /> */}
					{/* </div> */}
					
				</div>
			</div>
			
		</div>
	)
}

export default Profile

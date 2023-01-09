import { Divider } from '@mui/material'
import React from 'react'
import avatar from '../../../assets/avatar.JPG'
import { Typography } from '@mui/material'

const Profile = () => {
	return (
		<div >
			<img
				className="object-cover object-top w-full  h-[50vh]"
				// src="../../../assets/avatar.JPG"
				src={avatar}
			/>
			<div className="px-3">
				{/* <h1 className=" my-3 text-3xl font-bold ">
					Виктория Лёвина
				</h1> */}
				<div className='my-3'>
					<Typography variant='h4' sx={{fontWeight: 'bold'}}>Виктория Лёвина</Typography>
					<Typography variant='h6' sx={{color: '#757575'}}>@botanica.tattoo.art</Typography>
				</div>
				
				<Divider sx= {{width: '25%'}}/>
				<p className="mt-2 text-slate-500">Рязань, Москва</p>
				<p className="mt-3 text-slate-500">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
					magnam totam nemo ullam ut neque unde eum optio accusantium
					necessitatibus quam, ipsa deserunt placeat repellendus numquam pariatur
					ratione, maxime libero.
				</p>
			</div>
		</div>
	)
}

export default Profile

import React from 'react'
import avatar from '../../../assets/avatar.JPG'

const Profile = () => {
	return (
		<div className="">
			<img
				className="object-cover object-top w-full  h-[40vh]"
				// src="../../../assets/avatar.JPG"
				src={avatar}
			/>
			<h1 className="px-3 mt-6 text-3xl font-bold text-center">
				Виктория Лёвина
			</h1>
			<p className="px-3 mt-3 text-center text-slate-600">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
				magnam totam nemo ullam ut neque unde eum optio accusantium
				necessitatibus quam, ipsa deserunt placeat repellendus numquam pariatur
				ratione, maxime libero.
			</p>
		</div>
	)
}

export default Profile

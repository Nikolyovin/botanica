import React from 'react'
import logo from '../../assets/flower-pot.png'

const Header = () => {
	return (
		<div className=" flex px-3 justify-between items-center w-full h-[80px]">
			<img className="w-[50px] h-[50px]" src={logo} />
			<span className="italic text-lg">botanica.tattoo.art</span>
		</div>
	)
}

export default Header

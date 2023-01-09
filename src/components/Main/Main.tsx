import React from 'react'
import ContactMe from './ContactMe/ContactMe'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'

const Main = () => {
    return (
        <div className='w-full color'>
            <Profile />
            <Portfolio />
            <ContactMe />
        </div>
    )
}

export default Main

import React from 'react'
import ContactMeBottom from './ContactMe/ContactMeBottom'
import ContactMeTop from './ContactMe/ContactMeTop'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'

const Main = () => {
    return (
        <div className='w-full '>
            <Profile />
            <Portfolio />
            <ContactMeTop />
            <ContactMeBottom />
        </div>
    )
}

export default Main

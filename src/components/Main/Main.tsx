import React from 'react'
import AnswersOnQuestions from './AnswersOnQuestions/AnswersOnQuestions'
import ContactMeBottom from './ContactMe/ContactMeBottom'
import ContactMeTop from './ContactMe/ContactMeTop'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'

const Main = () => {
    return (
        <main className='w-full '>
            <Profile />
            <Portfolio />
            <ContactMeTop />
            <ContactMeBottom />
            <AnswersOnQuestions />
        </main>
    )
}

export default Main

import React from 'react'
import AnswersOnQuestions from './AnswersOnQuestions/AnswersOnQuestions'
import BeforeTattoo from './BeforeTattoo/BeforeTattoo'
import ContactMeBottom from './ContactMe/ContactMeBottom'
import ContactMeTop from './ContactMe/ContactMeTop'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'
import Reminder from './Reminder/Reminder'

const Main = () => {
    return (
        <main className='w-full '>
            <Profile />
            <Portfolio />
            <ContactMeTop />
            <BeforeTattoo />
            <AnswersOnQuestions />
            <Reminder />
            <ContactMeBottom />
        </main>
    )
}

export default Main

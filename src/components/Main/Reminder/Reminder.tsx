import { Card, CardContent } from '@mui/material'
import { Element } from 'react-scroll'
import photo from '../../../assets/IMG_3394.jpg'
import ReminderSlideShow from './ReminderSlideShow'

const Reminder = () => {
    return (
        <section className='relative '>
            <Element name='reminder'>
                <img className='absolute left-0 z-0 object-cover h-full w-full' src={photo} />
                <div className='relative pt-[40px] z-10 pb-[60px] px-4 '>
                    <h3 className='title flex-1 text-white'>Памятка по уходу за татуировкой</h3>

                    <ReminderSlideShow />
                </div>
            </Element>
        </section>
    )
}

export default Reminder

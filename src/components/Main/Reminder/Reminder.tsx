import { Card, CardContent } from '@mui/material'
import { Element } from 'react-scroll'
import photo from '../../../assets/IMG_3394.jpg'

const Reminder = () => {
    return (
        <section className='relative '>
            <Element name='answersOnQuestions'>
                <img className='absolute left-0 z-0 object-cover h-full' src={photo} />
                <div className='relative pt-[40px] z-10 pb-[60px] px-4 '>
                    <h3 className='title flex-1 text-white'>Памятка по уходу за татуировкой</h3>

                    <div className='h-full p-5 mt-3 rounded-lg border-dotted border-4 border-white '>
                        <h6 className='text-center text-4xl font-bold mb-3 text-white amatic'>1. Первые шаги</h6>
                        <p className='text-end  font-bold text-white '>
                            Собор Василия Блаженного или Покрова Пресвятой Богородицы что на рву или Живоначальной
                            Троицы что на рву? Когда стали называть этот собор именем юродивого? Разберём детально этот
                            мемориал, ведь как нам говорят историки его установили в честь победы над Казанским Ханством
                            и это не 1 церковь, а целых 9 церквей, хотя было время что число церквей доходило до 18.
                        </p>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Reminder

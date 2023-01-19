import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay } from 'swiper'
import img2 from '../../../assets/IMG_3014.JPG'
import img3 from '../../../assets/IMG_3179.JPG'
import img5 from '../../../assets/IMG_3207.JPG'
import img6 from '../../../assets/IMG_3205.JPG'
import img7 from '../../../assets/IMG_3266.JPG'
import 'swiper/css'
import 'swiper/css/pagination'

interface ISlide {
    src: string
}

const SlideShow = () => {
    const arrSlides: ISlide[] = [
        {
            src: img2
        },
        {
            src: img3
        },
        {
            src: img5
        },
        {
            src: img6
        },
        {
            src: img7
        }
    ]

    return (
        <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            effect='fade'
            // autoplay={{ delay: 1000, waitForTransition: false, disableOnInteraction: false }}
            fadeEffect={{ crossFade: true }}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
        >
            {arrSlides.map(({ src }) => (
                <SwiperSlide key={src}>
                    <img className='slideImg z-0' src={src} alt='photo' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SlideShow

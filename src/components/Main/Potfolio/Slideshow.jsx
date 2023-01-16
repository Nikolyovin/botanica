import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import img1 from '../../../assets/IMG_2595.JPG'
import img2 from '../../../assets/IMG_3014.JPG'
import img3 from '../../../assets/IMG_3179.JPG'
// simport img4 from '../../../assets/IMG_3268.JPG'
import img5 from '../../../assets/IMG_3207.JPG'
import img6 from '../../../assets/IMG_3205.JPG'
import img7 from '../../../assets/IMG_3266.JPG'
import 'swiper/css'
import 'swiper/css/pagination'

export default () => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
                // el: '.my-custom-pagination-div',
                dynamicBullets: true,
                clickable: true
                // renderBullet: (index, className) => {
                // 	return '<span class="' + className + '">' + (index + 1) + "</span>";
                // },
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
        >
            <SwiperSlide>
                <img className='slideImg' src={img7} />
                {/* <span>slide 2</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img5} />
                {/* <span>slide 3</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img6} />
                {/* <span>slide 4</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img3} />
                {/* <span>slide 1</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img2} />
                {/* <span>slide 2</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img7} />
                {/* <span>slide 3</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img3} />
                {/* <span>slide 4</span> */}
            </SwiperSlide>
            <SwiperSlide>
                <img className='slideImg' src={img5} />
                {/* <span>slide 1</span> */}
            </SwiperSlide>
            {/* <SwiperSlide> */}
            {/* <img className='h-[127px] w-[102px] object-cover rounded-2xl' src={img1} /> */}
            {/* <span>slide 1</span> */}
            {/* </SwiperSlide> */}
            {/* <div className='flex justify-center items-center pt-5'>
				<div className='my-custom-pagination-div' />
			</div> */}
        </Swiper>
    )
}
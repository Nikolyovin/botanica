import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../../../assets/IMG_2595.JPG'
import img2 from '../../../assets/IMG_3014.JPG'
import img3 from '../../../assets/IMG_3179.JPG'
import img4 from '../../../assets/IMG_3268.JPG'

// Import Swiper styles
import 'swiper/css'

export default () => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={2}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<img className="h-[100px] w-[200px] object-cover" src={img1} />
				{/* <span>slide 1</span> */}
			</SwiperSlide>
			<SwiperSlide>
				<img className="h-[100px]  w-[200px] object-cover" src={img2} />
				{/* <span>slide 2</span> */}
			</SwiperSlide>
			<SwiperSlide>
				<img className="h-[100px] w-[200px] object-cover" src={img3} />
				{/* <span>slide 3</span> */}
			</SwiperSlide>
			<SwiperSlide>
				<img className="h-[100px] w-[200px] object-cover" src={img4} />
				{/* <span>slide 4</span> */}
			</SwiperSlide>
		</Swiper>
	)
}

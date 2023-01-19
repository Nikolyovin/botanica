import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// import SwiperCore, { Autoplay, Navigation, EffectCards } from 'swiper'

// SwiperCore.use([Autoplay, Navigation, EffectCards]) //need for autoplay slideshow

const App = () => {
    return (
        <div>
            <Header />
            {/* <Drawer /> */}
            <Main />
            <Footer />
        </div>
    )
}

export default App

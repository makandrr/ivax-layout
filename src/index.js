import './scss/index.scss'
import './infiniteScroll'
import Swiper from 'swiper'
import 'swiper/css'

const swiper = new Swiper('.projects-swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10
})
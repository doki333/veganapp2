import React from 'react'
import Slider from 'react-slick'
import styles from './imgCarousel.module.scss'

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ImgCarousel = () => {
  return (
    <Slider {...settings} className={styles.imgCarousel}>
      <img
        src='https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
        alt='vegan food'
        height='500px'
      />
      <img
        src='https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='vegan food'
        height='500px'
      />
      <img
        src='https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='vegan food'
        height='500px'
      />
      <img
        src='https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'
        alt='vegan food'
        height='500px'
      />
      <img
        src='https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80'
        alt='vegan food'
        height='500px'
      />
    </Slider>
  )
}

export default ImgCarousel

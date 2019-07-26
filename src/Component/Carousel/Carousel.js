 import React from 'react';
 import Swiper from 'react-id-swiper';
 import './Carousel.css';

  const Autoplay = (props) => {
    const params = {
      spaceBetween: 200,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    const images = props.images.map((image, i) => (
          <div key={ i }>
            <div className="image_container">
              <img src={ image }
                   alt={ image } />
            </div>
          </div>
        ));
    return (
      <Swiper {...params}>
           { images }
      </Swiper>
    )
  };
  export default Autoplay;


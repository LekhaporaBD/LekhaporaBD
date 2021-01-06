import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './carousel.module.scss'

const Corousel = ({data}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
<div className={style.container}>
       
        <Slider {...settings}>
          
          {
            data.map(event => (
              <div className={style.event}>
                <div className={style.date}>{event.date}</div>
                <div className={style.title}>{event.title}</div>
                <div className={style.post}>{event.post}</div>
              </div>
            ))
          }
      
        </Slider>
      </div>
    )
}

export default Corousel

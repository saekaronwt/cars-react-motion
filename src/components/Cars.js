import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animation";

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Cars = () => {
  return (
    <div className="cars__container">
      <motion.h1
        className="title"
        variants={h3Animation}
        animate="show"
        exit="hide"
      >
        Choose you car
      </motion.h1>
      <Swiper
        className="list__cars mySwiper"
        // variants={gridAnimation}
        // animate="show"
        // exit="hide"
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        pagination={ {clickable: true} }
      >
        {Data.map((itemCar) => {
          return (
            <SwiperSlide
                className="car__card" key={itemCar.id}
                // variants={cardAnimation}
                // animate="show"
                // exit="hide"
              >
            <Link to={`/car/${itemCar.id}`}  className="item__car">
              
                <img src={require(`../assets/${itemCar.image}`)} alt={itemCar.car} />
            </Link>
            </SwiperSlide>

          );
        })}
      </Swiper>
    </div>
  );
};

export default Cars;

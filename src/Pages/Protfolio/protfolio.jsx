// // import React, { useContext } from "react";
import "./protfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Responseui from "../img/Responce-ui.jpeg";
import Restorent from "../img/Web capture_5-1-2024_203753_localhost.jpeg";
import Antcrud from "../img/Web capture_7-1-2024_12150_ranjith356.github.io.jpeg";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Responseui} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Restorent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Antcrud} alt="" />
        </SwiperSlide>
        <SwiperSlide>{/* <img src={} alt="" /> */}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

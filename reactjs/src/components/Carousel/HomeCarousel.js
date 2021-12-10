import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "assets/css/carousel.css";

export default function HomeCarousel() {
    const settings = {
        centerMode: true,
        centerPadding: "50px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };
    return (
      <div className="home_carousel">
        <Slider {...settings}>
            <img src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2021/11/22/8/9/5/8/1637572742253.jpg"></img>
            <img src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2021/12/07/f/b/e/8/1638894546279.jpg"></img>
            <img src="https://avatar-ex-swe.nixcdn.com/slideshow-web/2021/11/24/d/4/1/9/1637745949088.jpg"></img>
        </Slider>
      </div>
    );
}
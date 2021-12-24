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
            <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FCarouselImages%2F1638894546279.jpg?alt=media&token=b9bf7822-e088-4b54-a7b0-a3a7f2759183"></img>
            <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FCarouselImages%2F1638762973682.jpg?alt=media&token=35aedf12-0a47-4706-a799-fb7089adb515"></img>
            <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FCarouselImages%2F1638246839633.jpg?alt=media&token=c4f7f7c3-767e-411b-827c-6df0bd8eddce"></img>
            <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FCarouselImages%2F1637745949088.jpg?alt=media&token=40993f1a-f828-4bc6-b0f9-4f2be1947c9e"></img>
        </Slider>
      </div>
    );
}
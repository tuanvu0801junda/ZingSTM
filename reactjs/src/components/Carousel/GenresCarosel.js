import React from "react";
import Slider from "react-slick";

export default function GenresCarousel(props) {
    const settings = {
        centerMode: true,
        centerPadding: "50px",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    const genres = props.genres;

    console.log(genres);

    return (
      <div>
        <Slider {...settings}>
            {albums.map((row) => {
                return ;
            })}
        </Slider>
      </div>
    );
}
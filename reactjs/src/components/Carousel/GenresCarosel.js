import TopGenres from "components/Genres/TopGenres";
import React from "react";
import Slider from "react-slick";

export default function GenresCarousel(props) {
    const settings = {
        centerMode: false,
        centerPadding: "50px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    const genres = props.genres;

    console.log(genres);

    return (
      <div>
        <Slider {...settings}>
            {genres.map((row) => {
                return (
                  <TopGenres
                    imgURL={row.genreImage}
                    title={row.genreName}
                    genreId={row.genreId}
                  />
                );
            })}
        </Slider>
      </div>
    );
}
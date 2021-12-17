import TopArtists from "components/Artists/TopArtists";
import React from "react";
import Slider from "react-slick";

export default function ArtistsCarousel(props) {
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

    const artists = props.artists;

    return (
      <div>
        <Slider {...settings}>
            {artists.map((row) => {
                return (
                  <TopArtists
                    key={0}
                    imgURL={row.artistImage}
                    artistName={row.artistName}
                    artistId={row.artistId}
                  />
                );
            })}
        </Slider>
      </div>
    );
}
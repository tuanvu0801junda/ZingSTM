import React from "react";
import Slider from "react-slick";
import TopAlbums from 'components/Albums/TopAlbums';

export default function AlbumsCarousel(props) {
    const settings = {
        centerMode: false,
        centerPadding: "50px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    const albums = props.albums;

    return (
      <div>
        <Slider {...settings}>
            {albums.map((row) => {
                return (
                    <TopAlbums
                        key={row.albumId}
                        title={row.title}
                        imgURL={row.artworkPath}
                        category="New !"
                        albumId={row.albumId}
                    />
                )
            })}
        </Slider>
      </div>
    );
}
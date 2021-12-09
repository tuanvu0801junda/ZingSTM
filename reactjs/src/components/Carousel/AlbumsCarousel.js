import React from "react";
import Slider from "react-slick";
import TopAlbums from 'components/Albums/TopAlbums';

export default function AlbumsCarousel(props) {
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

    const albums = props.albums;

    console.log(albums);
    albums.map((row) => console.log(row));

    return (
      <div>
        <Slider {...settings}>
            {albums.map((row) => {
                return (
                    <TopAlbums
                        title={row.title}
                        imgURL={row.artworkPath}
                        category="New !"
                    />
                )
            })}
        </Slider>
      </div>
    );
}
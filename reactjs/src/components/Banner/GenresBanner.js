import "./playlistBanner.css"
function GenresBanner(props) {
    return (
        <div className="playlist">
            <div className="playlist__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <img src={props.imgURL} />
                <div className="playlist__infoText">
                    <strong>Genres</strong>
                    <h2>{props.genres}</h2>
                    <button className="play__button">
                        <i class="fas fa-play"></i>
                        <span style={{ margin: "0px 10px 0px 10px" }}>Phát ngẫu nhiên</span>
                    </button>
                    <button className="heart__button">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button className="share__button">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default GenresBanner
import "assets/css/banner.css"
function GenresBanner(props) {
    return (
        <div className="playlist">
            <div className="playlist__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <img src={props.imgURL} />
                <div className="playlist__infoText">
                    <strong>Genre</strong>
                    <h2>{props.genres}</h2>
                    <button className="play__button">
                        <i className="fas fa-play"></i>
                        <span style={{ margin: "0px 10px 0px 10px" }}>Phát lần lượt</span>
                    </button>
                    <button className="heart__button">
                        <i className="fas fa-heart"></i>
                    </button>
                    <button className="share__button">
                        <i className="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default GenresBanner
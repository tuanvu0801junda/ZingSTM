import "assets/css/banner.css"
function ArtistBanner(props) {
    return (
        <div className="playlist">
            <div className="playlist__info">
                <img src={props.imgURL} />
                <div className="playlist__infoText">
                    <strong>Artist</strong>
                    <h2>
                        {props.artistName}
                    </h2>
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
export default ArtistBanner
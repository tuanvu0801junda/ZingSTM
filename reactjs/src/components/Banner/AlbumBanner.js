import "./playlistBanner.css"
function AlbumBanner() {
    return (
        <div className="playlist">
            <div className="playlist__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FScreenshot%20from%202021-11-27%2020-09-14.png?alt=media&token=9e8519cf-b8bb-4908-8e58-0cd183a2e5f6" />
                <div className="playlist__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>V-Pop Tháng 11/2021</h2>
                    <p>Vũ Cát Tường, Erik, Min</p>
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
export default AlbumBanner
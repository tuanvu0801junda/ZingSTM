import "./playlistBanner.css"
function SongBanner() {
    return (
        <div className="playlist">
            <div className="playlist__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2F1.png?alt=media&token=6e85865e-73a6-44eb-bdba-d484113ed349" />
                <div className="playlist__infoText">
                    <strong>SINGLE</strong>
                    <h2>Lỡ như anh yêu em</h2>
                    <p>Chi dân ・2018</p>
                    <p>890 yêu thích</p>

                    <button className="play__button">
                        <i class="fas fa-play"></i>
                        <span style={{ margin: "0px 10px 0px 10px" }}>Tiếp tục phát</span>
                    </button>
                    <button className="add__button">
                        <i class="fas fa-plus"></i>
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
export default SongBanner
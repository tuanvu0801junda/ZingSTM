import "./SongButton.css"
function SongButton() {
    return (
        <div className="song_table">
            <button className="song_button" >
                <i class="fas fa-play-circle"></i>

            </button>
            <button className="song_button">
                <i class="fas fa-plus-circle"></i>

            </button>
            <button className="song_button">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    );
}
export default SongButton
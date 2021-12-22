import "assets/css/buttons.css";
import AddSongToPlay from "functions/AddSongToPlay";
import AddSongToPlaylistButton from "components/Buttons/AddSongToPlaylistButton";

function SongButton(props) {
	const play = () => {
		AddSongToPlay(props.songId);
	};
	return (
		<div className="song_table">
			<button className="song_button" onClick={play}>
				<i className="fas fa-play-circle"></i>
			</button>
			<AddSongToPlaylistButton songId={props.songId}/>
			<button className="song_button">
				<i className="fas fa-heart"></i>
			</button>
		</div>
	);
}
export default SongButton;

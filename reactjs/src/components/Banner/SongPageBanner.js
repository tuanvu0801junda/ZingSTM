import "./playlistBanner.css";
import { Button } from "@chakra-ui/react";
import AddSongToPlay from "functions/AddSongToPlay";

export default function SongPageBanner(props) {
	const play = () => {
		AddSongToPlay(props.song.songId);
	}
	return (
		<div className="playlist">
			<div className="playlist__info">
				<img src={props.song.imagePath} />
				<div className="playlist__infoText">
					<h2>{props.song.title}</h2>
					<Button variant="outline" colorScheme="teal" size="lg" onClick={play}>
						<i class="fas fa-play"></i>
						<span style={{ margin: "0px 10px 0px 10px" }}>
							Phát
						</span>
					</Button>
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

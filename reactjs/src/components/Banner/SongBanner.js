import "assets/css/banner.css";
import { Button, Grid } from "@chakra-ui/react";
import AddSongToPlay from "functions/AddSongToPlay";
import AddSongToPlaylistButtonBanner from "components/Buttons/AddSongToPlaylistButtonBanner";

export default function SongBanner(props) {
	const play = () => {
		AddSongToPlay(props.song.songId);
	}
	return (
		<div className="playlist">
			<div className="playlist__info">
				<img src={props.song.imagePath} />
				<div className="playlist__infoText">
					<h2>{props.song.title}</h2>
					<Grid templateColumns="3fr 1fr" gap={3} width="20%">
						<Button variant="outline" colorScheme="teal" size="lg" onClick={play}>
							<i className="fas fa-play"></i>
							<span style={{ margin: "0px 10px 0px 10px" }}>
								Phát
							</span>
						</Button>
						<AddSongToPlaylistButtonBanner songId={props.song.songId} />
					</Grid>
				</div>
			</div>
		</div>
	);
}

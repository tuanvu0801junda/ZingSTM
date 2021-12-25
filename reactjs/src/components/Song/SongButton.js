import AddSongToPlay from "functions/AddSongToPlay";
import { Grid, Button } from "@chakra-ui/react";
import AddSongToPlaylistButton from "components/Buttons/AddSongToPlaylistButton";

function SongButton(props) {
	const play = () => {
		AddSongToPlay(props.songId);
	};
	return (
		<Grid templateColumns="1fr 1fr 1fr" w="150px">
			<Button size="sm" colorScheme="blue" variant="outline" width="10px" onClick={play}>
				<i className="fas fa-play"></i>
			</Button>
			<AddSongToPlaylistButton songId={props.songId} />
		</Grid>
	);
}
export default SongButton;

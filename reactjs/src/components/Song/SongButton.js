import AddSongToPlay from "functions/AddSongToPlay";
import AddSongToPlaylistButton from "components/Buttons/AddSongToPlaylistButton";
import { Grid, Button } from "@chakra-ui/react";

function SongButton(props) {
	const play = () => {
		AddSongToPlay(props.songId);
	};
	return (
		<Grid templateColumns="1fr 1fr 1fr" w="150px">
			<Button size="sm" colorScheme="blue" variant="outline" width="10px" onClick={play}>
				<i class="fas fa-play"></i>
			</Button>
			<AddSongToPlaylistButton songId={props.songId}/>
		</Grid>
	);
}
export default SongButton;

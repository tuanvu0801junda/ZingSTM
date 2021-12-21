import { Button } from "@chakra-ui/react";
import axios from "axios";
import swal from "sweetalert";

export default function PopupPlaylistButton(props) {
    const submit = async () => {
        const data = {
            songId: props.songId,
            playlistId: props.playlistId,
        }

        const res = await axios.post('api/addSongToPlaylist', data);
        if (res.data.status === 200) swal("Success", res.data.message, "success");
        else if (res.data.status === 1062) swal("Failed", res.data.message, "warning");
    }

	return (
		<Button colorScheme="blue" variant="ghost" size="sm" onClick={submit}>
			{props.playlistName}
		</Button>
	);
}

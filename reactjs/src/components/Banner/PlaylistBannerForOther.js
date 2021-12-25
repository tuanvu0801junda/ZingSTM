import { Button, Text } from "@chakra-ui/react";
import "assets/css/banner.css";
import AddPlaylistToPlay from "functions/AddPlaylistToPlay";

export default function PlaylistBannerForOther(props) {
	return (
		<div className="playlist">
			<div className="playlist-info">
				<img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FDefault.jpg?alt=media&token=6bf68b0f-af7c-429a-987b-6ff4fd74beaf" />
				<div>
					<Text color="teal" fontWeight="bold" fontSize="5xl">
						{props.playlist.playlistName}
					</Text>
					<br />
					<Button
						variant="outline"
						colorScheme="blue"
						size="lg"
						minWidth="200px"
						onClick={() => AddPlaylistToPlay(props.playlist.playlistId)}
					>
						<i className="fas fa-play"></i>
						<span style={{ margin: "0px 10px 0px 10px" }}>
							Phát lần lượt
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
}

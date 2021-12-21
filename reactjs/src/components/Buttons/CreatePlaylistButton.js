import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
	Button,
	Flex,
	Icon,
	Text,
	Spacer,
	Stack,
	Input,
	FormControl,
	FormLabel,
	FormHelperText
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Card from "components/Card/Card";
import "assets/css/popup.css";
import axios from "axios";
import swal from "sweetalert";
import { PlaylistContext } from "components/Container/MyPlaylist";

export default function CreatePlaylistButton(props) {
	const [popupOpen, setPopupOpen] = useState(false);
	const {playlists, setPlaylists} = useContext(PlaylistContext);
	var playlistName = "";
	const handleChange = (e) => {
		playlistName = e.target.value;
	}

	const submit = async () => {
		const data = {
			userId: props.userId,
			playlistName: playlistName,	
		}
		const res = await axios.post('api/createUserPlaylist', data);
		if (res.data.status === 1062) swal("Failed", res.data.message, "warning");
		else if (res.data.status === 200) swal("Success!", res.data.message, "success").then(() => {
			setPopupOpen(false);
			setPlaylists(playlists.concat(res.data.playlist));
		});
	}

	return (
		<Popup
			open={popupOpen}
			onOpen={() => {setPopupOpen(true)}}
			trigger={
				<Button
					p="0px"
					bg="transparent"
					color="gray.500"
					border="1px solid lightgray"
					borderRadius="15px"
					minWidth="220px"
				>
					<Flex direction="row" justifyContent="center">
						<Icon
							as={FaPlus}
							fontSize="lg"
							mb="12px"
							margin="0"
							pl="5px"
							pr="5px"
						/>
						<Text fontSize="lg" fontWeight="bold">
							Create a new playlist
						</Text>
					</Flex>
				</Button>
			}
			position="right center"
			modal
			nested
		>
			{(close) => (
				<Card>
					<Text as="b" color="gray.500" isTruncated>
						<FormControl>
							<FormLabel>Playlist Name</FormLabel>
							<Input type="text" placeholder="Enter the playlist name" onChange={handleChange} name="playlistName"/>
							<FormHelperText>
								The name of a playlist will make everyone to know what the topic of this playlist.
							</FormHelperText>
						</FormControl>
					</Text>
					<br />
					<Flex direction="row">
						<Spacer />
						<Stack direction="row" spacing={4} align="center">
							<Button
								maxWidth="100px"
								variant="outline"
								colorScheme="blue"
								size="md"
								onClick={submit}
							>
								Create
							</Button>
							<Button
								maxWidth="100px"
								variant="outline"
								colorScheme="blue"
								size="md"
								onClick={() => {
									close();
								}}
							>
								Close
							</Button>
						</Stack>
					</Flex>
				</Card>
			)}
		</Popup>
	);
}

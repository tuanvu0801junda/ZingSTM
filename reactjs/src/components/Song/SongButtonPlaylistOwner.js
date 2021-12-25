import AddSongToPlay from "functions/AddSongToPlay";
import AddSongToPlaylistButton from "components/Buttons/AddSongToPlaylistButton";
import {
	Button,
	Grid,
	useDisclosure,
	Modal,
	ModalContent,
	ModalOverlay,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Text,
	ModalFooter,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { SongContext } from "components/Playlist/PlaylistOwner";
import { useContext } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function SongButtonPlaylistOwner(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { songs, setSongs } = useContext(SongContext);
	const play = () => {
		AddSongToPlay(props.songId);
	};

	const removeSong = async () => {

		const data = {
			playlistId: props.playlistId,
			songId: props.songId,
		};

		const res = await axios.post("api/deleteSongFromPlaylist", data);
		if (res.data.status === 200) {
			for (var i = 0; i < songs.length; i++) {
				if (songs[i].songId === data.songId) {
					let tmpSongs = songs;
					tmpSongs.splice(i, 1);
					setSongs([...tmpSongs]);
					swal("Done", "Remove song successfully!", "success");
					onClose();
					break;
				}
			}

		} else swal("Opps!", "Some error occured.", "error");
	};

	return (
		<>
			<Grid templateColumns="1fr 1fr 1fr" w="150px">
				<Button
					size="sm"
					colorScheme="blue"
					variant="outline"
					width="10px"
					onClick={play}
				>
					<i className="fas fa-play"></i>
				</Button>
				<AddSongToPlaylistButton songId={props.songId} />
				<Button
					size="sm"
					colorScheme="blue"
					variant="outline"
					width="10px"
					onClick={onOpen}
				>
					<CloseIcon />
				</Button>
			</Grid>

			<Modal
				blockScrollOnMount={false}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Confirm</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem" color="teal">
							Are you sure a bout that?
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="red" mr={3} onClick={i => removeSong(i)}>
							Remove
						</Button>
						<Button
							variant="outline"
							colorScheme="blue"
							onClick={onClose}
						>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

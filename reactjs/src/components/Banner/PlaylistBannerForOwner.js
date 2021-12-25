import { useRef, useState } from "react";
import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	ModalFooter,
	ModalBody,
	Text,
	Grid,
} from "@chakra-ui/react";

import VerifyCode from "components/Container/VerifyCode";
import "assets/css/banner.css";
import axios from "axios";
import swal from "sweetalert";

export default function PlaylistBannerForOwner(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [value, setValue] = useState("");
	const [playlistName, setPlaylistName] = useState(props.playlist.playlistName)
	const initialRef = useRef();
	const finalRef = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const renamePlaylist = async () => {
		const data = {
			playlistId: props.playlist.playlistId,
			playlistName: value,
		}

		const res = await axios.post("api/renamePlaylist", data);
		if (res.data.status === 200) {
			setPlaylistName(value);
			setValue("");
			onClose();
			swal("Done", "Playlist name updated!", "success");
		} else swal("Opps!", "Some error occured!", "error");
	}

	return (
		<>
			<div className="playlist">
				<div className="playlist__info">
					<img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FDefault.jpg?alt=media&token=6bf68b0f-af7c-429a-987b-6ff4fd74beaf" />
					<div>
						<Text color="teal" fontWeight="bold" fontSize="5xl">
							{playlistName}
						</Text>
						<VerifyCode verifyCode={props.playlist.verifyCode} />
						<br />
						<br />
						<Grid templateColumns="8fr 1fr 1fr" gap={6} width="40%">
							<Button
								variant="outline"
								colorScheme="blue"
								size="lg"
								minWidth="200px"
							>
								<i className="fas fa-play"></i>
								<span style={{ margin: "0px 10px 0px 10px" }}>
									Phát lần lượt
								</span>
							</Button>
							<Button
								variant="outline"
								colorScheme="blue"
								size="lg"
								width="20px"
								borderRadius="50%"
							>
								<i className="fas fa-trash"></i>
							</Button>
							<Button
								variant="outline"
								colorScheme="blue"
								size="lg"
								width="20px"
								borderRadius="50%"
								onClick={onOpen}
							>
								<i className="fas fa-pen-nib"></i>
							</Button>
						</Grid>
					</div>
				</div>
			</div>
			<>
				<Modal
					initialFocusRef={initialRef}
					finalFocusRef={finalRef}
					isOpen={isOpen}
					onClose={onClose}
					isCentered={true}
					blockScrollOnMount={false}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Enter new name</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Playlist name</FormLabel>
								<Input
									ref={initialRef}
									placeholder="Enter your playlist name here."
									value={value}
									onChange={handleChange}
								/>
							</FormControl>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={renamePlaylist}>
								Save
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		</>
	);
}

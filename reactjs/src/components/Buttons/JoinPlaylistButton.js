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
import { PlaylistContext } from "components/Container/PlaylistSharedWithMe";

export default function JoinPlaylistButton(props) {
	const [popupOpen, setPopupOpen] = useState(false);
	const {playlists, setPlaylists} = useContext(PlaylistContext);
	var verifyCode = "";
	const handleChange = (e) => {
		verifyCode = e.target.value;
	}

	const submit = async () => {
		const data = {
			userId: props.userId,
			verifyCode: verifyCode,	
		}
		const res = await axios.post('api/checkVerifyCode', data);
		if (res.data.status === 404) swal("Failed", res.data.message, "warning");
        else if (res.data.status === 201) swal("Oh~!", res.data.message, "warning");
		else if (res.data.status === 200) swal("Success!", res.data.message, "success").then(() => {
            console.log(res.data.test);
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
					minWidth="170px"
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
							Join a playlist
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
							<FormLabel>Verify Code</FormLabel>
							<Input type="text" placeholder="Enter the verify code" onChange={handleChange} name="verifyCode"/>
							<FormHelperText>
								Each playlist has a verify code, get the verify code from playlist owner to join.
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
								Join
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
								Cancel
							</Button>
						</Stack>
					</Flex>
				</Card>
			)}
		</Popup>
	);
}

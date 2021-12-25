import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function DeletePlaylistButton(props) {
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const deletePlaylist = async () => {
        const data = {
            playlistId: props.playlistId,
        }

        const res = await axios.post("api/deletePlaylist", data);
        if (res.data.status === 200) {
            swal("Done !", res.data.message, "success").then(history.push("/zingstm/profile"));
        } else swal("Error !", res.data.message, "error");
    }

	return (
		<>
			<Button
				variant="outline"
				colorScheme="blue"
				size="lg"
				width="20px"
				borderRadius="50%"
				onClick={onOpen}
			>
				<i className="fas fa-trash"></i>
			</Button>
			<Modal
				blockScrollOnMount={false}
				isOpen={isOpen}
				onClose={onClose}
                isCentered={true}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Confirm delete</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem">
							Are you sure to delete playlist?
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={deletePlaylist}>
							Yes
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

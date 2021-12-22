import {
	Flex,
	Button,
	Box,
	Image,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function (props) {
	const history = useHistory();
	const textColor = useColorModeValue("gray.700", "white");

	const goToPlaylistPage = () =>
		history.push("/zingstm/playlist/" + props.playlistId);
	return (
		<Flex direction="column" as="button">
			<Box mb="20px" position="relative" borderRadius="15px">
				<Image
					src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FDefault.jpg?alt=media&token=6bf68b0f-af7c-429a-987b-6ff4fd74beaf"
					borderRadius="15px"
				/>
				<Box
					w="100%"
					h="100%"
					position="absolute"
					top="0"
					borderRadius="15px"
					bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
				></Box>
			</Box>
			<Flex direction="column">
				<Text
					fontSize="xl"
					color={textColor}
					fontWeight="bold"
					mb="10px"
				>
					{props.playlistName}
				</Text>
				<Flex justifyContent="space-between">
					<Button
						variant="outline"
						colorScheme="teal"
						minW="50px"
						h="36px"
						fontSize="md"
						px="1.5rem"
						onClick={goToPlaylistPage}
					>
						View playlist
					</Button>
					{/* <AvatarGroup size="xs">
						<Avatar name="Ryan Florence" src={} />
					</AvatarGroup> */}
				</Flex>
			</Flex>
		</Flex>
	);
}

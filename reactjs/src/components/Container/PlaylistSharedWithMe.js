import React, { useState, useEffect, createContext } from "react";
// Chakra imports
import {
	Flex,
	Grid,
	Spacer,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import ProfilePlaylist from "components/Playlist/ProfilePlaylist";
import axios from "axios";
import JoinPlaylistButton from "components/Buttons/JoinPlaylistButton";

const PlaylistContext = createContext();
export { PlaylistContext };

export default function MyPlaylist(props) {
	const [playlists, setPlaylists] = useState(null);
	const [mes, setMes] = useState(
		<Text as="b" color="gray.500" isTruncated>
			Loading...
		</Text>
	);

	useEffect(() => {
		if (!playlists) getPlaylists(props.userId);
	}, []);

	const getPlaylists = async (userId) => {
		const data = {
			userId: userId,
		};

		const res = await axios.post("/api/getPlaylistSharedByOther", data);
		if (res.data.status === 200) setPlaylists(res.data.playlists);
		else if (res.data.status === 404)
			setPlaylists([]);
			setMes(
				<Text as="b" color="gray.500" isTruncated>
					You did't join any playlist yet!
				</Text>
			);
	};

	const textColor = useColorModeValue("gray.700", "white");
	return (
		<PlaylistContext.Provider value={{ playlists, setPlaylists }}>
			<Card p="16px" my="24px">
				<CardHeader p="12px 5px" mb="12px">
					<Flex w="100%">
						<Text
							fontSize="lg"
							as="b"
							color={textColor}
							fontWeight="bold"
							verticalAlign="center"
						>
							Playlists shared with me
						</Text>
						<Spacer />
						<JoinPlaylistButton userId={props.userId} />
					</Flex>
				</CardHeader>
				<CardBody px="5px">
					{playlists === null ? (
						mes
					) : (
						<Grid
							templateColumns={{
								sm: "repeat(2, 1fr)",
								md: "repeat(4, 1fr)",
								xl: "repeat(5, 1fr)",
							}}
							templateRows={{
								sm: "1fr 1fr 1fr auto",
								md: "1fr 1fr",
								xl: "1fr",
							}}
							gap="16px"
						>
							{playlists.map((row) => {
								return (
									<ProfilePlaylist
										playlistName={row.playlistName}
										playlistId={row.playlistId}
										userId={props.userId}
									/>
								);
							})}
						</Grid>
					)}
				</CardBody>
			</Card>
		</PlaylistContext.Provider>
	);
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Chakra imports
import {
	Flex,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AlbumBanner from "components/Banner/AlbumBanner";
import SongInRow from "components/Song/SongInRow";
import axios from "axios";

function Album() {
	const { albumId } = useParams();
	const [album, setAlbum] = useState(null);
	const [songs, setSongs] = useState(null);
	const textColor = useColorModeValue("gray.700", "white");

	// Get album info
	useEffect(() => {
		const getAlbumInfo = async (albumId) => {
			const data = {
				albumId: albumId,
			};
	
			const res = await axios.post("/api/getOneAlbumInfo", data);
			if (res.data.status === 200) {
				setAlbum(res.data);
			}
		};
		if (!album) {
			getAlbumInfo(albumId);
		}
	}, []);

	// Get songs
	useEffect(() => {
		if (!songs) {
			getAlbumSong(albumId);
		}
	}, []);

	const getAlbumSong = async (albumId) => {
		const data = {
			albumId: albumId,
		};

		const res = await axios.post("/api/getSongOfAlbum", data);
		if (res.data.status === 200) setSongs(res.data.songs);
		else if (res.data.status === 404) setSongs([]);
	};
	// ('songId', 'imagePath', 'songPath', 'duration','title','albumName')

	return (
		<Flex direction="column" pt={{ base: "120px", md: "75px" }}>
			{album === null ? (
				"Loading..."
			) : (
					<AlbumBanner
						title={album.title}
						imgURL={album.artworkPath}
						albumId={albumId}
					/>
			)}
			<Card overflowX={{ xl: "hidden" }}>
				<CardHeader p="6px 0px 22px 0px">
					<Text fontSize="xl" color={textColor} fontWeight="bold">
						Song
					</Text>
				</CardHeader>
				<CardBody>
					<Table variant="simple" color={textColor}>
						<Thead>
							<Tr my=".8rem" pl="0px" color="gray.400">
								<Th color="gray.400"></Th>
								<Th color="gray.400"></Th>
								<Th color="gray.400">Genre</Th>
								<Th color="gray.400">Duration</Th>
							</Tr>
						</Thead>
						<Tbody>
							{!songs
								? "Loading..."
								: songs.map((row) => {
										return (
											<SongInRow
												genreName={row.genreName}
												songId={row.songId}
												title={row.title}
												logo={row.imagePath}
												songPath={row.songPath}
												albumName={row.albumName}
												artistName={row.artistName}
												duration={row.duration}
												status="x"
												key={row.songId}
											/>
										);
								  })}
						</Tbody>
					</Table>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default Album;

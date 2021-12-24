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
import SongInRow from "components/Song/SongInRow";
import PlaylistCommentContainer from "components/Container/PlaylistCommentContainer";
import { Separator } from "components/Separator/Separator";
import PlaylistBannerForOwner from "components/Banner/PlaylistBannerForOwner";

export default function PlaylistOwner(props) {
	console.log(props);
	const textColor = useColorModeValue("gray.700", "white");

	return (
		<Flex direction="column" pt={{ base: "120px", md: "75px" }}>
			<PlaylistBannerForOwner playlist={props.data.playlist} />
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
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							{props.data.songs.map((row) => {
								return (
									<SongInRow
										songId={row.songId}
										title={row.title}
										logo={row.imagePath}
										songPath={row.songPath}
										genreName={row.genreName}
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
				<Separator h="3px" />
				<br />
				<Text fontWeight="bold" color="teal" fontSize="lg">
					Comments
				</Text>
				<PlaylistCommentContainer
					playlistId={props.data.playlist.playlistId}
					userInfo={props.userInfo}
				/>
			</Card>
		</Flex>
	);
}

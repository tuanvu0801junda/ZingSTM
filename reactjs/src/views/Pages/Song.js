import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Chakra imports
import axios from "axios";
import { Box, Flex, Text, Grid, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import { Separator } from "components/Separator/Separator";
import SongBanner from "components/Banner/SongBanner";
import SongCommentContainer from "components/Container/SongCommentContainer";
import CardBody from "components/Card/CardBody";

export default function Song() {
	const { songId } = useParams();
	const [state, setState] = useState(null);
	const userInfo = useSelector((state) => state.reducerLogin).userInfo;
	const textColor = useColorModeValue("gray.700", "white");

	useEffect(() => {
		if (!state) {
			getSong(songId);
		}
	}, []);

	const getSong = async (songId) => {
		const data = {
			songId: songId,
		};

		const res = await axios.post("/api/getSongInfo", data);
		setState(res.data);
	};

	if (state === null) {
		return (
			<>
				<Flex height="100px">
					<div></div>
				</Flex>
				<Text
					color="teal"
					fontSize="40px"
					fontWeight="bold"
					align="center"
				>
					Loading...
				</Text>
			</>
		);
	} else if (state.status === 404) {
		return (
			<>
				<Flex height="100px">
					<div></div>
				</Flex>
				<Text
					color="teal"
					fontSize="40px"
					fontWeight="bold"
					align="center"
				>
					Song not found.
				</Text>
			</>
		);
	} else if (state.status === 200) {
		return (
			<Flex direction="column" pt={{ base: "120px", md: "75px" }}>
				<SongBanner song={state.song} />
				<Card overflowX={{ xl: "hidden" }}>
					<Separator h="3px" />
					<br />
					<Grid
						templateColumns={{ sm: "1fr", lg: "1fr 3fr" }}

						gap="24px"
						mb={{ lg: "26px" }}
					>
						<Flex direction="column">
							<Text fontWeight="bold" color="teal" fontSize="2xl">
								Song Information
							</Text>
							<br />
							<Flex alignItems="center" mb="18px">
								<Text
									fontSize="lg"
									color={textColor}
									fontWeight="bold"
									me="10px"
								>
									Artist:{" "}
								</Text>
								<Text
									fontSize="lg"
									color="gray.500"
									fontWeight="400"
								>
									{state.song.artistName}
								</Text>
							</Flex>
							<Flex alignItems="center" mb="18px">
								<Text
									fontSize="lg"
									color={textColor}
									fontWeight="bold"
									me="10px"
								>
									Duration:{" "}
								</Text>
								<Text
									fontSize="lg"
									color="gray.500"
									fontWeight="400"
								>
									{state.song.duration}
								</Text>
							</Flex>
							<Flex alignItems="center" mb="18px">
								<Text
									fontSize="lg"
									color={textColor}
									fontWeight="bold"
									me="10px"
								>
									Genre:{" "}
								</Text>
								<Text
									fontSize="lg"
									color="gray.500"
									fontWeight="400"
								>
									{state.song.genreName}
								</Text>
							</Flex>
						</Flex>
						<CardBody>
							<Flex direction="column" width="100%">
								<Text
									fontWeight="bold"
									color="teal"
									fontSize="2xl"
								>
									Comments
								</Text>
								<SongCommentContainer
									songId={songId}
									userInfo={userInfo}
								/>
							</Flex>
						</CardBody>
					</Grid>
				</Card>
			</Flex>
		);
	}
}

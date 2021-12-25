import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import "assets/css/buttons.css";
import "assets/css/popup.css";
import { Separator } from "components/Separator/Separator";
import CardHeader from "components/Card/CardHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PopupPlaylistButton from "./PopupPlaylistButton";

export default function AddSongToPlaylistButtonBanner(props) {
	const history = useHistory();
	const [playlists, setPlaylists] = useState(null);
	const [popupOpen, setPopupOpen] = useState(false);
	const userInfo = useSelector((state) => state.reducerLogin).userInfo;

	if (userInfo === undefined) {
		return (
			<Popup
				open={popupOpen}
				onOpen={() => {
					setPopupOpen(true);
				}}
				trigger={
					<Button size="lg" colorScheme="blue" variant="outline" width="10px" borderRadius="50%">
						<i className="fas fa-plus"></i>
					</Button>
				}
				position="right center"
				nested
			>
				{(close) => (
					<Card>
						<CardHeader>
							<Text fontSize="lg" minWidth="230px">
								Login needed
							</Text>
						</CardHeader>
						<Separator />
						<br />
						<Flex direction="row">
							<Spacer />
							<Stack direction="row" spacing={4} align="center">
								<Button
									maxWidth="100px"
									variant="outline"
									colorScheme="blue"
									size="sm"
									onClick={() => history.push("/auth/signin")}
								>
									Login
								</Button>
								<Button
									maxWidth="100px"
									variant="outline"
									colorScheme="blue"
									size="sm"
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

	useEffect(() => {
		if (!playlists) getPlaylists(userInfo.userId);
	}, []);

	const getPlaylists = async (userId) => {
		const data = {
			userId: userId,
		};

		const res = await axios.post("api/getPlaylistCreatedByUser", data);
		if (res.data.status === 200) {
			setPlaylists(res.data.playlists);
		} else if (res.data.status === 404) {
			setPlaylists([]);
		}
	};

	return (
		<Popup
			open={popupOpen}
			onOpen={() => {
				setPopupOpen(true);
			}}
			trigger={
				<Button size="lg" colorScheme="blue" variant="outline" width="10px" borderRadius="50%">
					<i className="fas fa-plus"></i>
				</Button>
			}
			position="right center"
			nested
		>
			{(close) => (
				<Card>
					{playlists == null ? (
						"Loading..."
					) : (
						<>
							<CardHeader>
								<Text fontSize="lg" minWidth="150px" align="center">
									Choose playlist
								</Text>
							</CardHeader>
							<Flex direction="column">
								{playlists.length === 0 
									?
									<Text fontSize="md" minWidth="150px" align="center" color="teal">
										No playlist found !
										<Button colorScheme="blue" variant="ghost" size="sm" onClick={() => history.push("/zingstm/profile")}>Create one?</Button>
									</Text>
									:
									playlists.map((row) => {
										return (
											<>
												<PopupPlaylistButton songId={props.songId} playlistId={row.playlistId} playlistName={row.playlistName} />
												<Separator />
											</>
										);
								})}
							</Flex>
						</>
					)}
					<br />
					<Flex direction="row">
						<Spacer />
						<Stack direction="row" spacing={4} align="center">
							<Button
								maxWidth="100px"
								variant="outline"
								colorScheme="blue"
								size="sm"
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

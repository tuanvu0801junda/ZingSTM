import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionLogin from "redux/actions/actionLogin";
import actionLogout from "redux/actions/actionLogout";
import actionUpdatePlaylist from "redux/actions/actionUpdatePlaylist";
import actionUpdateSidebar from "redux/actions/actionUpdateSidebar";
// Chakra imports
import {
	Avatar,
	Box,
	Button,
	Flex,
	Icon,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { Separator } from "components/Separator/Separator"
// Assets
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
	FaCube,
	FaPenFancy,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import uploadAvatar from "firebase/uploadFile";
import swal from "sweetalert";
import axios from "axios";
import MyPlaylist from "components/Container/MyPlaylist";
import PlaylistSharedWithMe from "components/Container/PlaylistSharedWithMe";

function Profile() {
	const dispatch = useDispatch();
	// Test
	const hiddenRTL = () => {
		dispatch(actionUpdateSidebar("user"));
	};
	//
	var userInfo = {
		email: "Undefined",
		profilePic:
			"https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2Fistockphoto-1223671392-612x612.jpg?alt=media&token=c746eb6a-3d27-478f-8309-d1fef46c8930",
		role: 0,
	};

	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");
	const bgProfile = useColorModeValue(
		"hsla(0,0%,100%,.8)",
		"linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
	);
	const borderProfileColor = useColorModeValue(
		"white",
		"rgba(255, 255, 255, 0.31)"
	);
	const emailColor = useColorModeValue("gray.400", "gray.300");

	userInfo = useSelector((state) => state.reducerLogin).userInfo;
	if (userInfo === undefined) return (
		<Flex direction="column">
			<Box
				mb={{ sm: "205px", md: "75px", xl: "70px" }}
				borderRadius="15px"
				px="0px"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				align="center"
			>
				<Box
					bgImage={ProfileBgImage}
					w="100%"
					h="300px"
					borderRadius="25px"
					bgPosition="50%"
					bgRepeat="no-repeat"
					position="relative"
					display="flex"
					justifyContent="center"
				>
					<Flex
						direction={{ sm: "column", md: "row" }}
						mx="1.5rem"
						maxH="330px"
						w={{ sm: "90%", xl: "95%" }}
						justifyContent={{ sm: "center", md: "space-between" }}
						align="center"
						backdropFilter="saturate(200%) blur(50px)"
						position="absolute"
						boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
						border="2px solid"
						borderColor={borderProfileColor}
						bg={bgProfile}
						p="24px"
						borderRadius="20px"
						transform={{
							sm: "translateY(45%)",
							md: "translateY(110%)",
							lg: "translateY(160%)",
						}}
					>
						<Flex
							align="center"
							mb={{ sm: "10px", md: "0px" }}
							direction={{ sm: "column", md: "row" }}
							w={{ sm: "100%" }}
							textAlign={{ sm: "center", md: "start" }}
						>
							<Flex
								direction="column"
								maxWidth="100%"
								my={{ sm: "14px" }}
							>
								<Text
									fontSize={{ sm: "lg", lg: "xl" }}
									color={textColor}
									fontWeight="bold"
									ms={{ sm: "8px", md: "0px" }}
								>
									You are not logged in
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);

	const updatePlaylist = () => {
		console.log("updatePlaylist");
		const audioList = [
			{
				name: "Lemon Kenshi",
				singer: "Luis Fonsi",
				cover:
					"https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLemon-Kenshi-00.png?alt=media&token=f1d10f6d-2622-4616-86de-db5cdf945da5",
				musicSrc:
					"https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLemon-Kenshi-00.mp3?alt=media&token=82e098a3-d697-4cf8-a994-12b9e4c005de",
			},
			{
				name: "Dorost Nemisham",
				singer: "Sirvan Khosravi",
				cover:
					"https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
				musicSrc:
					"https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
			},
		];

		dispatch(actionUpdatePlaylist(audioList));
	};

	const imageRef = useRef("");

	const showChooseFileDialog = () => {
		imageRef.current.click();
	};

	const handleChange = async (event) => {
		const fileObject = event.target.files[0];
		const avatarURL = await uploadAvatar(fileObject);
		updateAvatar(avatarURL);
	};

	const updateAvatar = async (avatarURL) => {
		const data = {
			userId: userInfo.userId,
			profilePic: avatarURL,
		};

		const res = await axios.post("/api/updateAvatar", data);

		console.log(res.data);

		if (res.data.status === 200) {
			try {
				var input = {
					userId: userInfo.userId,
				};
				const res = await axios.post("/api/getUserInfo", input);
				dispatch(actionLogin(res.data.user));
			} catch (err) {
				swal("Error", err.message, "error");
			}
		}
	};

	const logout = () => {
		dispatch(actionUpdateSidebar("logout"));
		dispatch(actionLogout());
	};

	return (
		
			<Flex direction="column">
				<Box
					mb={{ sm: "205px", md: "75px", xl: "70px" }}
					borderRadius="15px"
					px="0px"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					align="center"
				>
					<Box
						bgImage={ProfileBgImage}
						w="100%"
						h="300px"
						borderRadius="25px"
						bgPosition="50%"
						bgRepeat="no-repeat"
						position="relative"
						display="flex"
						justifyContent="center"
					>
						<Flex
							direction={{ sm: "column", md: "row" }}
							mx="1.5rem"
							maxH="330px"
							w={{ sm: "90%", xl: "95%" }}
							justifyContent={{ sm: "center", md: "space-between" }}
							align="center"
							backdropFilter="saturate(200%) blur(50px)"
							position="absolute"
							boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
							border="2px solid"
							borderColor={borderProfileColor}
							bg={bgProfile}
							p="24px"
							borderRadius="20px"
							transform={{
								sm: "translateY(45%)",
								md: "translateY(110%)",
								lg: "translateY(160%)",
							}}
						>
							<Flex
								align="center"
								mb={{ sm: "10px", md: "0px" }}
								direction={{ sm: "column", md: "row" }}
								w={{ sm: "100%" }}
								textAlign={{ sm: "center", md: "start" }}
							>
								<Avatar
									me={{ md: "22px" }}
									src={userInfo.profilePic}
									w="80px"
									h="80px"
									borderRadius="15px"
								/>
								<Flex
									direction="column"
									maxWidth="100%"
									my={{ sm: "14px" }}
								>
									<Text
										fontSize={{ sm: "lg", lg: "xl" }}
										color={textColor}
										fontWeight="bold"
										ms={{ sm: "8px", md: "0px" }}
									>
										{userInfo.fullname}
									</Text>
									<Text
										fontSize={{ sm: "sm", md: "md" }}
										color={emailColor}
										fontWeight="semibold"
									>
										{userInfo.email}
									</Text>
								</Flex>
							</Flex>
							<Flex
								direction={{ sm: "column", lg: "row" }}
								w={{ sm: "100%", md: "50%", lg: "auto" }}
							>
								<Button
									onClick={hiddenRTL}
									p="0px"
									bg="transparent"
									_hover={{ bg: "none" }}
								>
									<Flex
										align="center"
										w={{ sm: "100%", lg: "135px" }}
										bg="hsla(0,0%,100%,.3)"
										borderRadius="15px"
										justifyContent="center"
										py="10px"
										boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
										border="1px solid gray.200"
										cursor="pointer"
									>
										<Icon as={FaCube} me="6px" />
										<Text
											fontSize="xs"
											color={textColor}
											fontWeight="bold"
										>
											PLAY
										</Text>
									</Flex>
								</Button>

								<Button
									onClick={showChooseFileDialog}
									p="0px"
									bg="transparent"
									_hover={{ bg: "none" }}
								>
									<Flex
										align="center"
										w={{ lg: "135px" }}
										borderRadius="15px"
										justifyContent="center"
										py="10px"
										mx={{ lg: "1rem" }}
										cursor="pointer"
									>
										<Icon as={FaPenFancy} me="6px" />
										<Text
											fontSize="xs"
											color={textColor}
											fontWeight="bold"
										>
											CHANGE AVATAR
										</Text>
										<input
											ref={imageRef}
											type="file"
											style={{ display: "none" }}
											accept="image/*"
											onChange={handleChange}
										/>
									</Flex>
								</Button>

								<Button
									onClick={logout}
									p="0px"
									bg="transparent"
									_hover={{ bg: "none" }}
								>
									<Flex
										align="center"
										w={{ lg: "135px" }}
										borderRadius="15px"
										justifyContent="center"
										py="10px"
										cursor="pointer"
									>
										<Icon as={FiLogOut} me="6px" />
										<Text
											fontSize="xs"
											color={textColor}
											fontWeight="bold"
										>
											LOGOUT
										</Text>
									</Flex>
								</Button>
							</Flex>
						</Flex>
					</Box>
				</Box>

				<MyPlaylist userId={userInfo.userId}/>
				<Separator h="5px"/>
				<PlaylistSharedWithMe userId={userInfo.userId}/>
			</Flex>
	);
}

export default Profile;

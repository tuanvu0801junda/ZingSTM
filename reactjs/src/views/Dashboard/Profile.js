import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionLogin from "redux/actions/actionLogin";
import actionLogout from "redux/actions/actionLogout";
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
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	ModalFooter,
} from "@chakra-ui/react";
// Custom components
import { Separator } from "components/Separator/Separator";
// Assets
import ProfileBgImage from "assets/img/ProfileBackground.png";
import { FaRegEdit, FaUserEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import uploadAvatar from "firebase/uploadFile";
import swal from "sweetalert";
import axios from "axios";
import MyPlaylist from "components/Container/MyPlaylist";
import PlaylistSharedWithMe from "components/Container/PlaylistSharedWithMe";
import { useHistory } from "react-router-dom";

function Profile() {
	const history = useHistory();
	const dispatch = useDispatch();
	const imageRef = useRef("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef();
	const userInfo = useSelector((state) => state.reducerLogin).userInfo;
	const [inputPass, setInputPass] = useState({
		currentPass: "",
		newPass: "",
	});

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

	if (userInfo === undefined)
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
							justifyContent={{
								sm: "center",
								md: "space-between",
							}}
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

	const handleInputChangePass = (e) => {
		e.persist();
		setInputPass({ ...inputPass, [e.target.name]: e.target.value });
	};

	const changePassword = async () => {
		const data = {
			userId: userInfo.userId,
			password: inputPass.currentPass,
			newPassword: inputPass.newPass,
		};

		const res = await axios.post("api/changePass", data);
		if (res.data.status === 100) {
			swal("Opps!", res.data.message, "warning").then(() => initialRef.current.focus());
		} else if (res.data.status === 200) {
			swal("Success!", res.data.message, "success").then(() => onClose());
		}
	};

	const logout = () => {
		dispatch(actionUpdateSidebar("logout"));
		dispatch(actionLogout());
		history.push("/zingstm/home");
	};

	return (
		<>
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
							justifyContent={{
								sm: "center",
								md: "space-between",
							}}
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
									onClick={onOpen}
									p="0px"
									bg="transparent"
									variant="ghost"
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
										<Icon as={FaRegEdit} me="6px" />
										<Text
											fontSize="xs"
											color={textColor}
											fontWeight="bold"
										>
											CHANGE PASSWORD
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
									onClick={showChooseFileDialog}
									p="0px"
									bg="transparent"
									variant="ghost"
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
										<Icon as={FaUserEdit} me="6px" />
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
									variant="ghost"
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

				<MyPlaylist userId={userInfo.userId} />
				<Separator h="5px" />
				<PlaylistSharedWithMe userId={userInfo.userId} />
			</Flex>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Change password</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Old password</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Enter your current password."
								name="currentPass"
								value={inputPass.currentPass}
								onChange={handleInputChangePass}
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>New password</FormLabel>
							<Input
								placeholder="Enter your current password."
								name="newPass"
								value={inputPass.newPass}
								onChange={handleInputChangePass}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={changePassword}>
							Change
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default Profile;

import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
	Button,
	Flex,
	Text,
	Spacer,
	Stack,
	Input,
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import "assets/css/popup.css";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EnterVerifyCode() {
	const history = useHistory();
    const { playlistId } = useParams();
	const [popupOpen, setPopupOpen] = useState(true);
	var verifyCode = "";
	const handleChange = (e) => {
		verifyCode = e.target.value;
	};

	const userInfo = useSelector((state) => state.reducerLogin).userInfo;

	if (userInfo === undefined) {
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
					Login needed,
					<Button
						colorScheme="red"
						fontSize="40px"
						fontWeight="bold"
						variant="ghost"
						onClick={() => {
							history.push("/auth/signin");
						}}
					>
						Go
					</Button>
				</Text>
			</>
		);
	}

	const submit = async () => {
		const data = {
			userId: userInfo.userId,
			verifyCode: verifyCode,
		};
		const res = await axios.post("api/checkVerifyCode", data);
		if (res.data.status === 404)
			swal("Failed", res.data.message, "warning");
		else if (res.data.status === 201)
			swal("Oh~!", res.data.message, "warning");
		else if (res.data.status === 200)
			swal("Success!", res.data.message, "success").then(() => {
				setPopupOpen(false);
				history.push("/zingstm/playlist/" + playlistId);
			});
	};

	return (
		<Popup
			open={popupOpen}
			onOpen={() => {
				setPopupOpen(true);
			}}
			trigger={<Button display="none"></Button>}
			position="right center"
			modal
			nested
		>
			{(close) => (
				<Card>
					<Text as="b" color="gray.500" isTruncated>
						<FormControl>
							<FormLabel>Verify Code</FormLabel>
							<Input
								type="text"
								placeholder="Enter the verify code"
								onChange={handleChange}
								name="verifyCode"
							/>
							<FormHelperText>
								Each playlist has a verify code, get the verify
								code from playlist owner to join.
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

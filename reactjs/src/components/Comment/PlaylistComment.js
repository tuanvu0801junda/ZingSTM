import "./Comment.css";
import React from "react";
import { useColorModeValue, Flex, Text, Avatar, Box } from "@chakra-ui/react";
import { Separator } from "components/Separator/Separator";

export default function PlaylistComment(props) {
	const { name, date, comment, userAvatar } = props;
	const textColor = useColorModeValue("gray.700", "white");
	return (
		<>
			<Flex my="1rem" justifyContent="space-between">
				<Flex alignItems="center">
					<Box
						me="12px"
						borderRadius="50%"
						border="1px solid"
						display="flex"
						alignItems="center"
						justifyContent="center"
						w="35px"
						h="35px"
					>
						<Avatar src={userAvatar} />
					</Box>
					<Flex direction="column" pl="15px">
						<Text
							fontSize={{ sm: "md", md: "lg", lg: "md" }}
							color={textColor}
							fontWeight="bold"
						>
							{name}
						</Text>
						<Text
							fontSize={{ sm: "md", md: "sm", lg: "md" }}
							color="gray.400"
							fontWeight="semibold"
						>
							{comment}
						</Text>
					</Flex>
				</Flex>
				<Box color={textColor}>
					<Text
						fontSize={{ sm: "md", md: "lg", lg: "md" }}
						fontWeight="bold"
					>
						{date}
					</Text>
				</Box>
			</Flex>
			<Separator width="40%"/>
		</>
	);
}

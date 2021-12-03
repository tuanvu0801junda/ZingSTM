import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SongButton from "./SongButton";

function SongPlayList(props) {
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");

    const playSong = () => {
        
    }

    return (
        <Tr>
            <Td minWidth={{ sm: "250px" }} pl="0px">
                <Flex as="button" onClick={playSong} align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Avatar src={props.logo} w="50px" borderRadius="12px" me="18px" />
                    <Flex direction="column">
                        <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                        >
                            {props.title}
                        </Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">
                            {props.title}
                        </Text>
                    </Flex>
                </Flex>
            </Td>

            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        Loading...
                    </Text>
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                        {props.genreName}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Badge
                    bg={status === "Online" ? "green.400" : bgStatus}
                    color={status === "Online" ? "white" : colorStatus}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                >
                    {status}
                </Badge>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {date}
                </Text>
            </Td>
            <Td>
                <SongButton />
            </Td>
        </Tr>
    );
}

export default SongPlayList;

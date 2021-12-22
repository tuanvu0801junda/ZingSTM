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
import AddSongToPlay from "functions/AddSongToPlay";
import React from "react";
import SongButton from "./SongButton";

function SongAlbum(props) {
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");

    const playSong = () => {
        AddSongToPlay(props.songId);
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
                            align="left"
                        >
                            {props.title}
                        </Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal" align="left">
                            {props.artistName}
                        </Text>
                    </Flex>
                </Flex>
            </Td>

            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                        
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Badge
                    bg={bgStatus}
                    color={colorStatus}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                >
                    {props.genreName}
                </Badge>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                    {props.duration}
                </Text>
            </Td>
            <Td>
                <SongButton songId={props.songId}/>
            </Td>
        </Tr>
    );
}

export default SongAlbum;

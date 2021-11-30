import {
    Avatar,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function SongCurrentPlay(props) {
    const { logo, name, singer, date } = props;
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Tr>
            <Td minWidth={{ sm: "250px" }} pl="0px">
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
                    <Flex direction="column">
                        <Text
                            fontSize="md"
                            color={textColor}
                            fontWeight="bold"
                            minWidth="100%"
                        >
                            {name}
                        </Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">
                            {singer}
                        </Text>
                    </Flex>
                </Flex>
            </Td>

            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem" style={{ float: "right" }}>
                    {date}
                </Text>
            </Td>
        </Tr>
    );
}

export default SongCurrentPlay;

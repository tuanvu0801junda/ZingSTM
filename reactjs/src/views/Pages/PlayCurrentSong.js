import React from "react";
import swal from "sweetalert";
import axios from 'axios';

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
import { useState } from "react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SongPlayList from "components/SongTable/SongPlayList";
import SongCurrentPlay from "components/SongTable/SongCurrentPlay";
import { songs, songData } from "variables/general";
import UserComment from "components/Comment/Comment";
import SongBanner from "components/Banner/songBanner";

function PlayList() {

    const textColor = useColorModeValue("gray.700", "white");


    //Lấy dữ liệu trong songComment
    const SongCurrentComment = [];
    async () => {
        var input = {
            songId: 1, //Xử lý sau
        }
        const res = await axios.post('/api/getAllSongComment', input);
        console.log(res.data);


        // if (res.data.status === 200) {
        //     try {

        //     }
        //     catch (err) {
        //         swal("Error", err.message, "error");
        //     }
        // }
    }

    const [comment, setComment] = useState(SongCurrentComment)
    //Update comment
    const commentUpdateHandle = (newCommentText) => {
        console.log(newCommentText);
        setComment((oldArray => {
            return [...oldArray, newCommentText]
        }));
    }

    return (
        <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
            <SongBanner />

            <Card overflowX={{ xl: "hidden" }}>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th pl="0px" color="gray.400">
                                    Song
                                </Th>

                                <Th color="gray.400" style={{ float: "right", margin: "0px 5px 0px 0px" }}>Time</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <SongCurrentPlay
                                name={songs[0].songName}
                                logo={songs[0].coverPath}
                                singer={songs[0].singer}
                                date={songs[0].time}
                            />
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>

            <Card overflowX={{ xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Có thể bạn quan tâm
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th pl="0px" color="gray.400">
                                    Song
                                </Th>
                                <Th color="gray.400">Album</Th>
                                <Th color="gray.400">Geres</Th>
                                <Th color="gray.400">Time</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {songData.map((row) => {
                                return (
                                    <SongPlayList
                                        name={row.name}
                                        logo={row.logo}
                                        singer={row.singer}
                                        // subdomain={songs[0].genres}
                                        domain={row.album}
                                        status={row.genres}
                                        date={row.time}
                                    />
                                );
                            })}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
            <UserComment commentData={comment} onSaveCommentData={commentUpdateHandle} />
        </Flex>
    );
}

export default PlayList;

import React from "react";
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
import { useState, useEffect } from "react";
import axios from 'axios';

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SongPlayList from "components/SongTable/SongPlayList";
import SongCurrentPlay from "components/SongTable/SongCurrentPlay";
import { songData } from "variables/general";
import UserComment from "components/Comment/Comment";
import SongBanner from "components/Banner/songBanner";

function PlayList() {
    const textColor = useColorModeValue("gray.700", "white");
    let songs = [
        { songName: "Lỡ như anh yêu em", singer: "Chi dân", album: "30", genres: "VPop", filePath: "./songs/1.mp3", time: "04:13", coverPath: "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2F1.png?alt=media&token=6e85865e-73a6-44eb-bdba-d484113ed349" },
        { songName: "Cielo - Huma-Huma", singer: "adele", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
        { songName: "DEAF KEV - Invincible [NCS Release]-320k", singer: "adele", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
        { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", singer: "adele", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    ]
    //Lấy dữ liệu trong songComment
    const SongCurrentComment = [];
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getCommandBackend();
    }, [])

    const getCommandBackend = async () => {
        var input = {
            songId: 1, //Xử lý sau
        }
        const res = await axios.post('/api/getAllSongComment', input);

        for (let i = 0; i < res.data.songs.length; i++) {
            const userName = res.data.songs[i].fullname;
            const userPic = res.data.songs[i].profilePic;
            const userComment = res.data.songs[i].userComment;
            const createdDate = res.data.songs[i].createdDate;
            SongCurrentComment.push({ userName: userName, userPic: userPic, createdDate: createdDate, userComment: userComment });
        }
        // console.log(SongCurrentComment);
        setComment(SongCurrentComment);
    }
    //getCommandBackend();

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

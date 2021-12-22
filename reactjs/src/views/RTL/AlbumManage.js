import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Chakra imports
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Avatar,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Tfoot,
    Td,
    TableCaption,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

export default function Dashboard() {
    // Chakra Color Mode
    const textColor = useColorModeValue("gray.700", "white");
    const history = useHistory();
    const [album, setAlbum] = useState([]);
    const [albumStatistic, getAlbumStatistic] = useState([]);
    useEffect(() => {
        getAllAlbumData();
    }, [])
    //Get album data from database
    const getAllAlbumData = async () => {
        const res = await axios.post("/api/getAllAlbumInfo");
        const res1 = await axios.post("api/getAlbumStatistic");
        if (res.data.status === 200) {
            setAlbum(res.data.albums);
            console.log(res.data.albums);
        }
        if (res1.data.status === 200) {
            getAlbumStatistic(res1.data.albumSong);
            console.log(res1.data.albumSong);
        }

    }
    for (let i = 0; i < album.length; i++) {
        for (let j = 0; j < albumStatistic.length; j++) {
            if (album[i].albumId === albumStatistic[j].albumId) {
                album[i]["totalSong"] = albumStatistic[j].songNumber;
                album[i]["totalPlay"] = albumStatistic[j].totalPlay;
            }
        }
    }
    //Handle add new album
    const goToAddAlbumPage = () => {
        history.push('/zingstm/add-album');
    }
    //Handle update album
    const goToUpdateAlbumPage = (event) => {
        const albumCurrentId = event.target.value;
        // console.log(albumCurrentId);
        history.push('/zingstm/update-album/' + albumCurrentId);
    }
    //Handle delete album
    const handleDeleteAlbum = (id) => {
        swal("Are you sure you to delete this album?", {
            buttons: {
                cancel: "No",
                catch: {
                    text: "Yes",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "cancel":
                        break;
                    case "catch":
                        axios.post("/api/deleteOneAlbum", { albumId: id });
                        window.location.reload();
                        break;
                    default:
                        break;
                }
            });
    }
    return (
        <div style={{ margin: '125px 0px 0px 0px' }}>
            <Card overflowX={{ xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Album Data
                    </Text>
                    <Button style={{ margin: "0 0 0 75%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToAddAlbumPage}>Add album
                    </Button>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">
                                    Album
                                </Th>
                                <Th style={{ textAlign: 'center' }} color="gray.400">Total Song</Th>
                                <Th style={{ textAlign: 'center' }} color="gray.400">Play Times</Th>
                                <Th color="gray.400">Update</Th>
                                <Th color="gray.400">Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {album.map((data) => {
                                return (
                                    <Tr>
                                        <Td minWidth={{ sm: "250px" }} pl="0px">
                                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                                <Avatar src={data.artworkPath} w="50px" borderRadius="12px" me="18px" />
                                                <Flex direction="column">
                                                    <Text
                                                        fontSize="md"
                                                        color={textColor}
                                                        fontWeight="bold"
                                                        minWidth="100%"
                                                    >
                                                        {data.title}
                                                    </Text>

                                                </Flex>
                                            </Flex>
                                        </Td>

                                        <Td style={{ textAlign: 'center' }}>
                                            <Flex direction="column">
                                                <Text fontSize="md" color={textColor} fontWeight="bold">
                                                    {data.totalSong || "0"}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td style={{ textAlign: 'center' }}>
                                            <Text fontSize="md" color={textColor} fontWeight="bold">
                                                {data.totalPlay || "0"}
                                            </Text>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="green" size="sm" onClick={goToUpdateAlbumPage} value={data.albumId}>Update</Button>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="red" size="sm" onClick={() => { handleDeleteAlbum(data.albumId) }}>Delete</Button>
                                        </Td>
                                    </Tr>
                                );
                            })}

                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>


    );
}

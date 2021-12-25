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
    const [artist, setArtist] = useState([]);
    const [artistSong, getArtistSong] = useState([]);
    useEffect(() => {
        getAllArtistData();
    }, [])
    //Get artist data from database
    const getAllArtistData = async () => {
        const res = await axios.post("/api/getAllArtistInfo");
        if (res.data.status === 200) {
            setArtist(res.data.artists);
        }
        const res1 = await axios.post("/api/getSongNumberOfAnArtist");
        if (res.data.status === 200) {
            getArtistSong(res1.data.artistSong);
        }
    }
    for (let i = 0; i < artist.length; i++) {
        if (artistSong !== undefined) {
            for (let j = 0; j < artistSong.length; j++) {
                if (artist[i].artistId === artistSong[j].artistId) {
                    artist[i]["totalSong"] = artistSong[j].songNumber;
                }
            }
        }

    }
    //Handle add new artist
    const goToAddArtistPage = () => {
        history.push('/zingstm/add-artist');
    }
    //Handle update artist
    const goToUpdateArtistPage = (event) => {
        const artistCurrentId = event.target.value;
        history.push('/zingstm/update-artist/' + artistCurrentId);
    }
    //Handle delete artist
    const handleDeleteArtist = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        swal("Are you sure you to delete this artist?", {
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
                        axios.post("/api/deleteOneArtist", { artistId: id });
                        setTimeout(function () {
                            swal({
                                title: "Success!",
                                text: "Delete Artist Successfully",
                                icon: "success",
                                button: "OK!",
                            })
                        }, 200);
                        thisClicked.closest("tr").remove();

                        // window.location.reload();
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
                        Artist Data
                    </Text>
                    <Button style={{ margin: "0 0 0 75%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToAddArtistPage}>Add artist
                    </Button>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">
                                    Artist
                                </Th>
                                <Th style={{ textAlign: 'center' }} color="gray.400">Total Song</Th>
                                <Th color="gray.400">Update</Th>
                                <Th color="gray.400">Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {artist.map((data, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td minWidth={{ sm: "250px" }} pl="0px">
                                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                                <Avatar src={data.artistImage} w="50px" borderRadius="12px" me="18px" />
                                                <Flex direction="column">
                                                    <Text
                                                        fontSize="lg"
                                                        color={textColor}
                                                        fontWeight="bold"
                                                        minWidth="100%"
                                                    >
                                                        {data.artistName}
                                                    </Text>

                                                </Flex>
                                            </Flex>
                                        </Td>

                                        <Td style={{ textAlign: 'center' }}>
                                            <Flex direction="column">

                                                <Text fontSize="lg" color={textColor} fontWeight="bold">
                                                    {data.totalSong || "0"}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="green" size="sm" onClick={goToUpdateArtistPage} value={data.artistId}>Update</Button>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="red" size="sm" onClick={(e) => { handleDeleteArtist(e, data.artistId) }}>Delete</Button>
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

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
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        getAllGenreData();
    }, [])
    //Get genre data from database
    const getAllGenreData = async () => {
        const res = await axios.post("/api/getAllGenreInfo");
        if (res.data.status === 200) {
            setGenre(res.data.genres);
        }
    }

    //Handle add new genre
    const goToAddGenrePage = () => {
        history.push('/zingstm/add-genre');
    }
    //Handle update genre
    const goToUpdateGenrePage = (event) => {
        const genreCurrentId = event.target.value;
        history.push('/zingstm/update-genre/' + genreCurrentId);
    }
    //Handle delete genre
    const handleDeleteGenre = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        swal("Are you sure you to delete this genre?", {
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
                        axios.post("/api/deleteOneGenre", { genreId: id });
                        setTimeout(function () {
                            swal({
                                title: "Success!",
                                text: "Delete Genre Successfully",
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
                        Genre Data
                    </Text>
                    <Button style={{ margin: "0 0 0 75%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToAddGenrePage}>Add Genre
                    </Button>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">
                                    Genre
                                </Th>
                                <Th color="gray.400">Update</Th>
                                <Th color="gray.400">Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {genre.map((data, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td minWidth={{ sm: "250px" }} pl="0px">
                                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                                <Avatar src={data.genreImage} w="50px" borderRadius="12px" me="18px" />
                                                <Flex direction="column">
                                                    <Text
                                                        fontSize="lg"
                                                        color={textColor}
                                                        fontWeight="bold"
                                                        minWidth="100%"
                                                    >
                                                        {data.genreName}
                                                    </Text>

                                                </Flex>
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="green" size="sm" onClick={goToUpdateGenrePage} value={data.genreId}>Update</Button>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="red" size="sm" onClick={(e) => { handleDeleteGenre(e, data.genreId) }}>Delete</Button>
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

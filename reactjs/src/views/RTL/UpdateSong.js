import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoDocumentsSharp } from "react-icons/io5";
// Chakra imports
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Avatar,
    Table,
    Tbody,
    Icon,
    Text,
    Th,
    Thead,
    Tr,
    Tfoot,
    Td,
    TableCaption,
    useColorMode,
    FormControl,
    FormLabel,
    Select,
    FormErrorMessage,
    FormHelperText,
    useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";


function AddSong(props) {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [genres, getGenres] = useState([]);

    //Get artist
    useEffect(() => {
        getAllArtistInfo();
    }, [])
    const getAllArtistInfo = async () => {
        const res = await axios.post("/api/getAllArtistInfo");
        if (res.data.status === 200) {
            getArtist(res.data.artists);
        }
    }
    const { songCurrentId } = useParams();
    console.log(songCurrentId);
    useEffect(() => {
        getAllAlbumInfo();
    }, [])
    const getAllAlbumInfo = async () => {
        const res = await axios.post("/api/getAllAlbumInfo");
        if (res.data.status === 200) {
            getAlbum(res.data.albums);
        }
    }
    //Get genres
    useEffect(() => {
        getAllGenreInfo();
    }, [])
    const getAllGenreInfo = async () => {
        const res = await axios.post("/api/getAllGenreInfo");
        if (res.data.status === 200) {
            getGenres(res.data.genres);
        }
    }
    //Handle back button
    const goToManageSongPage = () => {
        history.push('/zingstm/manage-song');
    }
    return (
        <div style={{ margin: '125px 0px 0px 0px' }} >
            <Card overflowX={{ xl: "hidden" }} >
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="2xl" color={textColor} fontWeight="bold">
                        Update
                    </Text>
                    <Button style={{ margin: "0 0 0 82%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToManageSongPage}>Back
                    </Button>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <FormLabel>Artist:</FormLabel>
                        <Select placeholder="Select artist">
                            {artist.map((data) => {
                                return (
                                    <option>{data.artistName}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Album:</FormLabel>
                        <Select placeholder="Select artist">
                            {album.map((data) => {
                                return (
                                    <option>{data.title}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Genres:</FormLabel>
                        <Select placeholder="Select artist">
                            {genres.map((data) => {
                                return (
                                    <option>{data.genreName}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Audio file:</FormLabel>
                        <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
                            <Flex
                                align="center"
                                w={{ lg: "135px" }}
                                borderRadius="15px"
                                justifyContent="center"
                                py="10px"
                                mx={{ lg: "1rem" }}
                                cursor="pointer"
                            >
                                <Icon as={IoDocumentsSharp} me="6px" />
                                <Text fontSize="xs" color={textColor} fontWeight="bold">
                                    SONG IMAGE
                                </Text>
                                <input
                                    type="file"
                                    accept="image/*"
                                // onChange={handleChange}
                                />
                            </Flex>
                        </Button>
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="gray">Choose file
                        </Button>
                        <br />
                        <FormLabel>Image:</FormLabel>
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="gray">Choose file
                        </Button>
                        <br /><br /><br />
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="blue">Upload
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    );
}

export default AddSong
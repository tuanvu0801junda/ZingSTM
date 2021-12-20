import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoDocumentsSharp } from "react-icons/io5";
import swal from "sweetalert";

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
    const [songCurrentName, getSongCurrentName] = useState('');
    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [image, setImage] = useState('');
    const { id } = useParams();

    //Get current song update
    useEffect(() => {
        getCurrentSongUpdate();
    }, [])
    const getCurrentSongUpdate = async () => {
        const data = {
            songId: id
        }
        const res = await axios.post("/api/getOneSongDetail", data);
        if (res.data.status === 200) {
            getSongCurrentName(res.data.song.title);
        }
    }
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
    //Get album
    useEffect(() => {
        getAllAlbumInfo();
    }, [])
    const getAllAlbumInfo = async () => {
        const res = await axios.post("/api/getAllAlbumInfo");
        if (res.data.status === 200) {
            getAlbum(res.data.albums);
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
                        <FormLabel fontSize="xl" color="blue">Song name: {songCurrentName}</FormLabel>
                        <br />
                        <FormLabel>Artist:</FormLabel>
                        <Select placeholder="Select artist" onChange={(e) => { getArtistIdSelected(e.target.selectedIndex) }}>
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
                        <FormLabel>Image Song:</FormLabel>
                        <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
                            <Flex
                                align="center"
                                w={{ lg: "350px" }}
                                borderRadius="15px"
                                justifyContent="center"
                                py="10px"
                                mx={{ lg: "1rem" }}
                                cursor="pointer"
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => { setImage(e.target.files[0]) }}
                                />
                            </Flex>
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
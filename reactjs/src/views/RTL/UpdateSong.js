import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoDocumentsSharp } from "react-icons/io5";
import swal from "sweetalert";
import { uploadSongImage } from '../../firebase/uploadMp3Image';
const imgUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2Fundefined?"

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


function UpdateSong(props) {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [songCurrentName, getSongCurrentName] = useState('');
    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [artistNameSelected, getArtistNameSelected] = useState('');
    const [albumNameSelected, getAlbumNameSelected] = useState('');
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
    const handleUpdateSong = async () => {
        const imageUrl = await uploadSongImage(image); //Get url from firebase
        updateSongToDataBase(imageUrl);
    }

    //Update new song to database
    const updateSongToDataBase = async (imageUrl) => {

        if (artistNameSelected != '' && albumNameSelected != '' && !imageUrl.includes(imgUrlUndefinded)) {
            //Get artistId from artistName
            const res2 = await axios.post('/api/getArtistId', { artistName: artistNameSelected })
            const artistIdSelected = res2.data.artist.artistId;
            //Get albumId from albumName
            const res1 = await axios.post('/api/getAlbumId', { albumName: albumNameSelected })
            const albumIdSelected = res1.data.album.albumId;

            const data = {
                songId: id,
                imagePath: imageUrl,
                artistId: artistIdSelected,
                albumId: albumIdSelected
            }
            console.log(data);

            const res = await axios.post('/api/updateOneSong', data);
            if (res.data.status === 200) {
                try {
                    console.log(res.data.message);
                    swal({
                        title: "Update Success!",
                        text: res.data.message,
                        icon: "success",
                        button: "OK!",
                    })
                        .then((value) => {
                            window.location.reload();
                        });

                }
                catch (err) {
                    swal("Error", err.message, "error");
                }
            }
        } else {
            swal({
                title: "Fail!",
                text: "Empty blank",
                icon: "warning",
                button: "OK!",
            });
        }

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
                        <Select placeholder="Select artist" onChange={(e) => { getArtistNameSelected(e.target.value) }}>
                            {artist.map((data) => {
                                return (
                                    <option value={data.artistName}>{data.artistName}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Album:</FormLabel>
                        <Select placeholder="Select album" onChange={(e) => { getAlbumNameSelected(e.target.value) }}>
                            {album.map((data) => {
                                return (
                                    <option value={data.title}>{data.title}</option>
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
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="blue" onClick={handleUpdateSong}>Update
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    );
}

export default UpdateSong
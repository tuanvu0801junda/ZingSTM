import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Chakra imports
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Icon,
    Avatar,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Tfoot,
    Td,
    Input,
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
import { uploadSongImage, uploadSongMp3 } from '../../firebase/uploadMp3Image';
import { getDurationSong } from './GetDurationSong'
// import  from 'firebase/uploadMp3Image';



function AddSong() {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [genres, getGenres] = useState([]);
    const [image, setImage] = useState('');
    const [mp3, setMp3] = useState('');
    const [songTitle, getSongTitle] = useState('');
    const [artistIdSelected, getArtistIdSelected] = useState('');
    const [albumIdSelected, getAlbumIdSelected] = useState('');
    const [genresIdSelected, getGenresIdSelected] = useState('');
    const [durationSong, getDurationSong] = useState('');


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

    //Handle upload song
    const handleUploadSong = async () => {
        const mp3Url = await uploadSongMp3(mp3); //Get url from firebase
        const imageUrl = await uploadSongImage(image); //Get url from firebase
        addNewSongToDataBase(mp3Url, imageUrl);
    }

    //Add new song to database
    // let durationConvert = "";
    const addNewSongToDataBase = async (mp3Url, imageUrl) => {
        //Get duration of song
        // const au = document.createElement('audio');
        // au.src = mp3Url;
        // const durationConvert = await au.addEventListener('loadedmetadata', function () {
        //     //Handle duration
        //     const duration = Math.ceil(au.duration);
        //     const duration_minute = Math.floor(duration / 60);
        //     const duration_second = duration - duration_minute * 60;
        //     const duration_Convert = duration_minute + ":" + duration_second;
        //     console.log("The duration of the song : " + duration_Convert);
        //     return duration_Convert;
        // }, false);
        const durationConvert = await getDurationSong(mp3Url);

        const data = {
            albumId: albumIdSelected,
            imagePath: imageUrl,
            songPath: mp3Url,
            title: songTitle,
            duration: durationConvert
        }
        console.log(data);

        // const res = await post('/api/postNewSong', data);
    }
    return (
        <div style={{ margin: '125px 0px 0px 0px' }} >
            <Card overflowX={{ xl: "hidden" }} >
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="2xl" color={textColor} fontWeight="bold">
                        New Song
                    </Text>
                    <Button style={{ margin: "0 0 0 82%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToManageSongPage}>Back
                    </Button>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <Text fontSize="md" mb="8px">Title:</Text>
                        <Input
                            value={songTitle}
                            onChange={(e) => { getSongTitle(e.target.value) }}
                            placeholder="Nhập tên bài hát"
                        />
                        <br /><br />
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
                        <Select placeholder="Select album" onChange={(e) => { getAlbumIdSelected(e.target.selectedIndex) }}>
                            {album.map((data) => {
                                return (
                                    <option>{data.title}</option>
                                );
                            })}
                            <option>Single</option>
                        </Select>
                        <br />
                        <FormLabel>Genres:</FormLabel>
                        <Select placeholder="Select genres" onChange={(e) => { getGenresIdSelected(e.target.selectedIndex) }}>
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
                                w={{ lg: "350px" }}
                                borderRadius="15px"
                                justifyContent="center"
                                py="10px"
                                mx={{ lg: "1rem" }}
                                cursor="pointer"
                            >
                                <input
                                    type="file"
                                    accept=".mp3"
                                    onChange={(e) => { setMp3(e.target.files[0]) }} />
                            </Flex>
                        </Button>

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
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="blue" onClick={handleUploadSong}>Upload
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    );
}

export default AddSong
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { uploadSongImage, uploadSongMp3 } from '../../../../firebase/uploadMp3Image';
import { getDurationSong } from './GetDurationSong'



function AddSong() {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [genres, getGenres] = useState([]);
    const [image, setImage] = useState('');
    const [mp3, setMp3] = useState('');
    const [songTitle, getSongTitle] = useState('');
    const [artistNameSelected, getArtistNameSelected] = useState('');
    const [albumNameSelected, getAlbumNameSelected] = useState('');
    const [genresIdSelected, getGenresIdSelected] = useState('');
    const songUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2Fundefined?";
    const imgUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2Fundefined?"
    const userInfo = useSelector((state) => state.reducerLogin).userInfo;
    if (userInfo === undefined) {
        history.push('/auth/signin/');
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
        let durationConvert = '';
        //Hanle empty mp3Url
        if (!mp3Url.includes(songUrlUndefinded))
            durationConvert = await getDurationSong(mp3Url);
        addNewSongToDataBase(mp3Url, imageUrl, durationConvert);
    }

    // let durationConvert = "";
    const addNewSongToDataBase = async (mp3Url, imageUrl, durationConvert) => {

        if (songTitle != '' && albumNameSelected != '' && artistNameSelected != '' && genresIdSelected != '' && !mp3Url.includes(songUrlUndefinded) && !imageUrl.includes(imgUrlUndefinded)) {
            //Get artistId from artistName
            const res2 = await axios.post('/api/getArtistId', { artistName: artistNameSelected })
            const artistIdSelected = res2.data.artist.artistId;
            //Get albumId from albumName
            const res1 = await axios.post('/api/getAlbumId', { albumName: albumNameSelected })
            const albumIdSelected = res1.data.album.albumId;

            const data = {
                albumId: albumIdSelected,
                imagePath: imageUrl,
                songPath: mp3Url,
                title: songTitle,
                duration: durationConvert
            }
            //Add new song to database

            const res = await axios.post('/api/postNewSong', data);
            if (res.data.status === 200) {
                try {
                    const songId = res.data.songId;
                    //Add new data to songArtistRelation table
                    const data1 = {
                        songId: songId,
                        artistId: artistIdSelected
                    }
                    await axios.post('/api/insertSongArtistRelation', data1);

                    //Add new data to songGenreRelation table
                    const data2 = {
                        songId: songId,
                        genreId: genresIdSelected
                    }
                    await axios.post('/api/insertSongGenreRelation', data2);
                    swal({
                        title: "Success!",
                        text: res.data.message,
                        icon: "success",
                        button: "OK!",
                    })
                        .then((value) => {
                            history.push('/zingstm/manage-song');
                        });

                    //Reset blank
                    // getSongTitle('');
                    // getGenresIdSelected({ selected: null });
                    // getArtistIdSelected({ selected: null });
                    // getAlbumIdSelected({ selected: null });
                    // setImage('No file chosen');
                    // setMp3('No file chosen');
                    // setTimeout(function () {
                    //     
                    // }, 2000)

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
                        <Select placeholder="Select artist" onChange={(e) => { getArtistNameSelected(e.target.value) }}>
                            {artist.map((data) => {
                                return (
                                    <option value={data.artistName} >{data.artistName}</option>
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
                        <FormLabel>Genre:</FormLabel>
                        <Select placeholder="Select genre" onChange={(e) => { getGenresIdSelected(e.target.selectedIndex) }}>
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
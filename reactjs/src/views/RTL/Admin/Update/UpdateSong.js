import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoDocumentsSharp } from "react-icons/io5";
import swal from "sweetalert";
import { uploadSongImage } from '../../../../firebase/uploadMp3Image';
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
    Input,
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
    const [songCurrentArtist, getSongCurrentArtist] = useState('');
    const [songNewName, setSongNewName] = useState('');
    const [songCurrentAlbum, getSongCurrentAlbum] = useState('');
    const [songCurrentGenre, getSongCurrentGenre] = useState('');

    const [artist, getArtist] = useState([]);
    const [album, getAlbum] = useState([]);
    const [genre, getGenre] = useState([]);
    const [artistNameSelected, getArtistNameSelected] = useState('');
    const [albumNameSelected, getAlbumNameSelected] = useState('');
    const [genreNameSelected, getGenreNameSelected] = useState('');

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
            getSongCurrentArtist(res.data.song.artistName);
            getSongCurrentAlbum(res.data.song.albumName);
            getSongCurrentGenre(res.data.song.genreName);
            setSongNewName(res.data.song.title);
            setImage(res.data.song.imagePath);
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
    //Get genres
    useEffect(() => {
        getAllGenreInfo();
    }, [])
    const getAllGenreInfo = async () => {
        const res = await axios.post("/api/getAllGenreInfo");
        if (res.data.status === 200) {
            getGenre(res.data.genres);
        }
    }
    //Handle back button
    const goToManageSongPage = () => {
        history.push('/zingstm/manage-song');
    }
    const handleUpdateSong = async () => {
        if (document.getElementById("image_update").files.length != 0) {
            const imageUrl = await uploadSongImage(image); //Get url from firebase
            updateSongToDataBase(imageUrl);
        } else updateSongToDataBase(image);
    }

    //Update new song to database
    const updateSongToDataBase = async (imageUrl) => {

        //Get artistId from artistName
        let artistIdSelected;
        if (artistNameSelected != "") {
            const res2 = await axios.post('/api/getArtistId', { artistName: artistNameSelected })
            artistIdSelected = res2.data.artist.artistId;
        } else {
            const res2 = await axios.post('/api/getArtistId', { artistName: songCurrentArtist })
            artistIdSelected = res2.data.artist.artistId;
        }

        //Get albumId from albumName
        let albumIdSelected;
        if (albumNameSelected != "") {
            const res1 = await axios.post('/api/getAlbumId', { albumName: albumNameSelected })
            albumIdSelected = res1.data.album.albumId;
        } else {
            const res1 = await axios.post('/api/getAlbumId', { albumName: songCurrentAlbum })
            albumIdSelected = res1.data.album.albumId;
        }

        //Get gnereId from genreName
        let genreIdSelected;
        if (genreNameSelected != "") {
            const res3 = await axios.post('/api/getGenreId', { genreName: genreNameSelected })
            genreIdSelected = res3.data.genre.genreId;
        } else {
            const res3 = await axios.post('/api/getGenreId', { genreName: songCurrentGenre })
            genreIdSelected = res3.data.genre.genreId;
        }

        const data = {
            songId: id,
            songName: songNewName,
            imagePath: imageUrl,
            artistId: artistIdSelected,
            albumId: albumIdSelected,
            genreId: genreIdSelected
        }

        const res = await axios.post('/api/updateOneSong', data);
        if (res.data.status === 200) {
            try {
                swal({
                    title: "Update Success!",
                    text: res.data.message,
                    icon: "success",
                    button: "OK!",
                })
                    .then((value) => {
                        history.push('/zingstm/manage-song');
                    });

            }
            catch (err) {
                swal("Error", err.message, "error");
            }
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
                        <br />
                        <FormLabel>Song name:</FormLabel>
                        <Input
                            value={songNewName}
                            onChange={(e) => { setSongNewName(e.target.value) }}
                            placeholder={songCurrentName}
                            size="md"
                        />
                        <br /><br />
                        <FormLabel>Artist:</FormLabel>
                        <Select placeholder="Select Artist" onChange={(e) => { getArtistNameSelected(e.target.value) }}>
                            {artist.map((data) => {
                                return (
                                    <option value={data.artistName}>{data.artistName}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Album:</FormLabel>
                        <Select placeholder="Select Album" onChange={(e) => { getAlbumNameSelected(e.target.value) }}>
                            {album.map((data) => {
                                return (
                                    <option value={data.title}>{data.title}</option>
                                );
                            })}
                        </Select>
                        <br />
                        <FormLabel>Genre:</FormLabel>
                        <Select placeholder="Select Genre" onChange={(e) => { getGenreNameSelected(e.target.value) }}>
                            {genre.map((data) => {
                                return (
                                    <option value={data.genreName}>{data.genreName}</option>
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
                                    id="image_update"
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
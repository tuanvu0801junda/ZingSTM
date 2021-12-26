import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { IoDocumentsSharp } from "react-icons/io5";
import swal from "sweetalert";
import { uploadSongImage } from '../../../../firebase/uploadMp3Image';


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
    Input,
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


function UpdateGenre() {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [genreCurrentName, getGenreCurrentName] = useState('');
    const [genreNewName, setGenreNewName] = useState('');
    const [image, setImage] = useState('');
    const imgUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2Fundefined?"
    const { id } = useParams();
    const userInfo = useSelector((state) => state.reducerLogin).userInfo;
    if (userInfo === undefined) {
        history.push('/auth/signin/');
    }

    //Get current genre update
    useEffect(() => {
        getCurrentGenreUpdate();
    }, [])
    const getCurrentGenreUpdate = async () => {
        const data = {
            genreId: id
        }
        const res = await axios.post("/api/getGenreInfoById", data);
        if (res.data.status === 200) {
            getGenreCurrentName(res.data.genre.genreName);
            setGenreNewName(res.data.genre.genreName);
            setImage(res.data.genre.genreImage);

        }
    }


    //Handle back button
    const goToManageGenrePage = () => {
        history.push('/zingstm/manage-genre');
    }

    //Handle update genre
    const handleUpdateGenre = async () => {
        if (document.getElementById("image_update").files.length != 0) {
            const imageUrl = await uploadSongImage(image); //Get url from firebase
            updateGenreToDataBase(imageUrl);
        } else updateGenreToDataBase(image);
    }

    //Update new genre to database
    const updateGenreToDataBase = async (imageUrl) => {

        const data = {
            genreId: id,
            genreImage: imageUrl,
            genreName: genreNewName
        }

        if (genreNewName != '' || !imageUrl.includes(imgUrlUndefinded)) {
            const res = await axios.post('/api/updateOneGenre', data);
            if (res.data.status === 200) {
                try {
                    swal({
                        title: "Update Success!",
                        text: res.data.message,
                        icon: "success",
                        button: "OK!",
                    })
                        .then((value) => {
                            history.push('/zingstm/manage-genre');
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
                    <Button style={{ margin: "0 0 0 82%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToManageGenrePage}>Back
                    </Button>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <br />
                        <FormLabel>Genre:</FormLabel>
                        <Input
                            value={genreNewName}
                            onChange={(e) => { setGenreNewName(e.target.value) }}
                            placeholder={genreCurrentName}
                            size="md"
                        />
                        <br /><br />
                        <FormLabel>Image Genre:</FormLabel>
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
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="blue" onClick={handleUpdateGenre}>Update
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    );
}

export default UpdateGenre
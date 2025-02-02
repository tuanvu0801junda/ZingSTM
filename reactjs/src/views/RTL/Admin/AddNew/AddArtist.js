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
import { uploadSongImage } from '../../../../firebase/uploadMp3Image';



function AddArtist() {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [image, setImage] = useState('');
    const [artistTitle, getArtistTitle] = useState('');
    const imgUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2Fundefined?"
    const userInfo = useSelector((state) => state.reducerLogin).userInfo;
    if (userInfo === undefined) {
        history.push('/auth/signin/');
    }
    //Handle back button
    const goToManageArtistPage = () => {
        history.push('/zingstm/manage-artist');
    }

    //Handle upload artist
    const handleUploadSong = async () => {
        const imageUrl = await uploadSongImage(image); //Get url from firebase
        addNewArtistToDataBase(imageUrl);
    }

    //Add new artist to database
    const addNewArtistToDataBase = async (imageUrl) => {

        const data = {
            artistImage: imageUrl,
            artistName: artistTitle
        }

        if (artistTitle != '' && !imageUrl.includes(imgUrlUndefinded)) {
            const res = await axios.post('/api/postNewArtist', data);
            if (res.data.status === 200) {
                try {
                    swal({
                        title: "Success!",
                        text: res.data.message,
                        icon: "success",
                        button: "OK!",
                    })
                        .then((value) => {
                            history.push('/zingstm/manage-artist');
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
                    <Text fontSize="21px" color={textColor} fontWeight="bold">
                        New Artist
                    </Text>
                    <Button style={{ margin: "0 0 0 82%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToManageArtistPage}>Back
                    </Button>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <Text fontSize="md" mb="8px">Title:</Text>
                        <Input
                            value={artistTitle}
                            onChange={(e) => { getArtistTitle(e.target.value) }}
                            placeholder="Nhập tên artist"
                        />
                        <br /><br />

                        <FormLabel>Image Artist:</FormLabel>
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

export default AddArtist
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
import { uploadSongImage } from '../../firebase/uploadMp3Image';



function AddGenre() {
    const history = useHistory();
    const textColor = useColorModeValue("gray.700", "white");
    const [image, setImage] = useState('');
    const [genreTitle, getGenreTitle] = useState('');
    const imgUrlUndefinded = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2Fundefined?"

    //Handle back button
    const goToManageGenrePage = () => {
        history.push('/zingstm/manage-genre');
    }

    //Handle upload genre
    const handleUploadGenre = async () => {
        const imageUrl = await uploadSongImage(image); //Get url from firebase
        addNewGenreToDataBase(imageUrl);
    }

    //Add new genre to database
    const addNewGenreToDataBase = async (imageUrl) => {

        const data = {
            genreImage: imageUrl,
            genreName: genreTitle
        }
        console.log(data);

        if (genreTitle != '' && !imageUrl.includes(imgUrlUndefinded)) {
            const res = await axios.post('/api/postNewGenre', data);
            if (res.data.status === 200) {
                try {
                    console.log(res.data.message);
                    swal({
                        title: "Success!",
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
                    <Text fontSize="21px" color={textColor} fontWeight="bold">
                        New Genre
                    </Text>
                    <Button style={{ margin: "0 0 0 82%", 'borderRadius': "5px" }} colorScheme="blue" onClick={goToManageGenrePage}>Back
                    </Button>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <Text fontSize="md" mb="8px">Title:</Text>
                        <Input
                            value={genreTitle}
                            onChange={(e) => { getGenreTitle(e.target.value) }}
                            placeholder="Nhập tên genre"
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
                                    accept="image/*"
                                    onChange={(e) => { setImage(e.target.files[0]) }}
                                />
                            </Flex>
                        </Button>
                        <br /><br /><br />
                        <Button style={{ 'borderRadius': "5px" }} colorScheme="blue" onClick={handleUploadGenre}>Upload
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    );
}

export default AddGenre
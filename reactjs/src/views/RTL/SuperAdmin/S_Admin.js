import { Link, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
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
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

export default function SuperAdmin() {
    // Chakra Color Mode
    const textColor = useColorModeValue("gray.700", "white");
    const [user, getUser] = useState([]);
    const [admin, getAdmin] = useState([]);
    const [pass, getPass] = useState("");
    const [userId, getUserId] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef();
    useEffect(() => {
        getUserData();
    }, [])
    //Get user data from database
    const getUserData = async () => {
        const res = await axios.post("/api/getAllUserInfo");
        if (res.data.status === 200) {
            getUser(res.data.users);
            getAdmin(res.data.admin);
        }
    }

    //Handle update user

    // const goToUpdateUser = (event) => {
    //     getUserId(event.target.value);

    //     // swal("Are you sure to update this user?", {
    //     //     buttons: {
    //     //         cancel: "No",
    //     //         catch: {
    //     //             text: "Yes",
    //     //             value: "catch",
    //     //         },
    //     //     },
    //     // })
    //     //     .then(async (value) => {
    //     //         switch (value) {
    //     //             case "cancel":
    //     //                 break;
    //     //             case "catch":
    //     //                 const res = await axios.post("/api/updateUser", { userId: userId });
    //     //                 if (res.data.status === 200) {
    //     //                     getAdmin(res.data.adminUpdate);
    //     //                     getUser(res.data.userUpdate);
    //     //                 }
    //     //                 console.log(user);
    //     //                 console.log(admin);
    //     //                 setTimeout(function () {
    //     //                     swal({
    //     //                         title: "Success!",
    //     //                         text: "Update Successfully",
    //     //                         icon: "success",
    //     //                         button: "OK!",
    //     //                     })
    //     //                 }, 200);
    //     //                 break;
    //     //             default:
    //     //                 break;
    //     //         }
    //     //     });
    // }

    // Handle delete user
    const handleDeleteUser = (e, userId) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        swal("Are you sure to delete this user?", {
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
                        axios.post("/api/deleteUser", { userId: userId });
                        setTimeout(function () {
                            swal({
                                title: "Success!",
                                text: "Delete User Successfully",
                                icon: "success",
                                button: "OK!",
                            })
                        }, 200);
                        thisClicked.closest("tr").remove();
                        break;
                    default:
                        break;
                }
            });
    }

    // Handle update user
    const verifyPass = async () => {
        console.log(userId);
        console.log(pass);
        if (pass == "DatHocBong") {
            const res = await axios.post("/api/updateUser", { userId: userId });
            //Update state
            if (res.data.status === 200) {
                getAdmin(res.data.adminUpdate);
                getUser(res.data.userUpdate);
            }
            swal({
                title: "Success!",
                text: "Update Successfully",
                icon: "success",
                button: "OK!",
            });
        } else {
            swal({
                title: "Error!",
                text: "Password Not Correct",
                icon: "error",
                button: "OK!",
            });
        }
        onClose();
        getPass("");
    }
    return (
        <div style={{ margin: '125px 0px 0px 0px' }}>
            <Card overflowX={{ xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        User Data
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400">
                                <Th color="gray.400">
                                    User
                                </Th>
                                {/* <Th color="gray.400">FullName</Th> */}
                                <Th color="gray.400">Email</Th>
                                <Th color="gray.400">Role</Th>
                                <Th color="gray.400">Update</Th>
                                <Th color="gray.400">Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {admin.map((data, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td minWidth={{ sm: "250px" }} pl="0px">
                                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                                <Avatar src={data.profilePic} w="50px" borderRadius="12px" me="18px" />
                                                <Flex direction="column">
                                                    <Text
                                                        fontSize="lg"
                                                        color={textColor}
                                                        fontWeight="bold"
                                                        minWidth="100%"
                                                    >
                                                        {data.fullname}
                                                    </Text>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                                        {data.username}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Td>

                                        <Td>
                                            <Flex direction="column">
                                                <Text fontSize="lg" color={textColor} fontWeight="bold">
                                                    {data.email}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Text fontSize="lg" color={textColor} fontWeight="bold">
                                                {data.role}
                                            </Text>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="green" size="sm" onClick={(e) => { onOpen(); getUserId(e.target.value); }} value={data.userId}>Set As User</Button>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="red" size="sm" onClick={(e) => { handleDeleteUser(e, data.userId) }}>Delete</Button>
                                        </Td>
                                    </Tr>
                                );
                            })}

                            {user.map((data, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td minWidth={{ sm: "250px" }} pl="0px">
                                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                                                <Avatar src={data.profilePic} w="50px" borderRadius="12px" me="18px" />
                                                <Flex direction="column">
                                                    <Text
                                                        fontSize="lg"
                                                        color={textColor}
                                                        fontWeight="bold"
                                                        minWidth="100%"
                                                    >
                                                        {data.fullname}
                                                    </Text>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                                        {data.username}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Td>

                                        <Td>
                                            <Flex direction="column">
                                                <Text fontSize="lg" color={textColor} fontWeight="bold">
                                                    {data.email}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Text fontSize="lg" color={textColor} fontWeight="bold">
                                                {data.role}
                                            </Text>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="green" size="sm" onClick={(e) => { onOpen(); getUserId(e.target.value); }} value={data.userId}>Set As Admin</Button>
                                        </Td>
                                        <Td>
                                            <Button colorScheme="red" size="sm" onClick={(e) => { handleDeleteUser(e, data.userId) }}>Delete</Button>
                                        </Td>
                                    </Tr>
                                );
                            })}

                            <Modal
                                initialFocusRef={initialRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Enter your password</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <Input type="password" value={pass} onChange={(e) => { getPass(e.target.value) }} />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={verifyPass} colorScheme="blue" mr={3}>
                                            Confirm
                                        </Button>
                                        <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>


    );
}
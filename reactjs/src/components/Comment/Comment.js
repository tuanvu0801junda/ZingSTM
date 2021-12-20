import "./Comment.css"
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import axios from 'axios';

import {    
    useColorModeValue,
    Flex,
    Text,
    Avatar,
    FormControl,
    Input,
    Button,
    Box,
} from "@chakra-ui/react";

import { useState } from "react"

function UserComment(props) {
    const { name, date, comment, userAvatar } = props;
    const textColor = useColorModeValue("gray.700", "white");
    var userInfo;
    var loginStatus = (useSelector((state) => state.reducerLogin)).status
    if (loginStatus == "LOGIN") {
        userInfo = (useSelector((state) => state.reducerLogin)).userInfo;
    } else if (loginStatus == "LOGOUT") {
        userInfo = (useSelector((state) => state.reducerLogin)).userInfo;
    }
    const [commentText, setCommentText] = useState("");
    const textChangeHandle = (event) => {
        setCommentText(event.target.value);
    }
    const handleSubmit = async (event) => {
        const data = {
            userId: userInfo.userId,
            songId: 1, //Xử lý sau
            userComment: commentText,
        }
        const userData = {
            userId: userInfo.userId
        }

        await axios.post('/api/postSongComment', data);
        const res = await axios.post('/api/getUserComment', userData);
        const userName = res.data.userComment[0].fullname;
        const userPic = res.data.userComment[0].profilePic;
        event.preventDefault();
        props.onSaveCommentData({ userName: userName, userPic: userPic, createdDate: new Date().toLocaleString(), userComment: data.userComment });
    }

    return (
        // <Flex>
        //     <div class="be-comment-block">
        //         <Text fontSize="xs" color={textColor} fontWeight="bold">
        //             Comments
        //         </Text>
        //         {props.commentData.map(data =>
        //             <div className="be-comment">
        //                 <div class="be-img-comment">
        //                     <Avatar
        //                         src={data.userPic} 
        //                         alt=""
        //                     />
        //                     {/* <a href="blog-detail-2.html">
        //                         <img src={data.userPic} alt="" class="be-ava-comment" />
        //                     </a> */}
        //                 </div>
        //                 <div class="be-comment-content">
        //                     <span class="be-comment-name">
        //                         {/* <a href="blog-detail-2.html">{data.userName}</a> */}
        //                         <Text fontWeight="bold">{data.userName}</Text>
        //                     </span>
        //                     <span class="be-comment-time">
        //                         {/* <i class="fa fa-clock-o"></i>
        //                         {data.createdDate} */}
        //                         <Text as="i" >{data.createdDate}</Text>
        //                     </span>

        //                     {/* <p class="be-comment-text">
        //                         {data.userComment}
        //                     </p> */}
        //                     <Text>{data.userComment}</Text>
        //                 </div>
        //             </div>
        //         )}

        //         <hr style={{ margin: "50px 0px 0px 0px" }}></hr>
        //         <FormControl id="first-name" isRequired>
        //         {/* <form class="form-block"> */}
        //             <div class="form-group">
        //                 <Avatar
        //                     src="https://bootdey.com/img/Content/avatar/avatar3.png"
        //                     alt=""
        //                 />
        //                 {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="be-ava-comment" /> */}
        //                 {/* <textarea class="form-input" required="" placeholder="Your Comment" onChange={textChangeHandle}></textarea> */}
        //                 <Input 
        //                     placeholder="Enter a comment"
        //                     onChange={textChangeHandle}
        //                 />
        //             </div>
        //             <Button
        //                 type="submit" 
        //                 onClick={handleSubmit}
        //             >
        //                 Send comment
        //             </Button>
        //             {/* <button class="comment-submit" type="submit" onClick={handleSubmit}>Submit</button> */}
        //         {/* </form> */}
        //         </FormControl>
        //     </div>
        // </Flex>
        <Flex my="1rem" justifyContent="space-between">
            <Flex alignItems="center">
                <Box
                me="12px"
                borderRadius="50%"
                border="1px solid"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="35px"
                h="35px"
                >
                    {/* <Icon as={logo} /> */}
                    <Avatar src={userAvatar}/>
                </Box>
                <Flex direction="column">
                <Text
                    fontSize={{ sm: "md", md: "lg", lg: "md" }}
                    color={textColor}
                    fontWeight="bold"
                >
                    {name}
                </Text>
                <Text
                    fontSize={{ sm: "md", md: "sm", lg: "md" }}
                    color="gray.400"
                    fontWeight="semibold"
                >
                    {comment}
                </Text>
                </Flex>
            </Flex>
            <Box
                color={textColor}
            >
                <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
                {date}
                </Text>
            </Box>
        </Flex>
    );
}
export default UserComment
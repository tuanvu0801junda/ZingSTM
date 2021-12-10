import "./Comment.css"
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import axios from 'axios';



import { useState } from "react"
function UserComment(props) {

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
            userId: 1, //userInfo.userId
            songId: 1, //Xử lý sau
            userComment: commentText,
        }
        
        const res = await axios.post('/api/postSongComment', data);

        console.log(res.data);

        if (res.data.status === 200) {
            try {
                var input = {
                    songId: 1, //Xử lý sau
                }
                const res = await axios.post('/api/getAllSongComment', input);
                // dispatch(actionLogin(res.data.user));
                console.log(res.data);
            }
            catch (err) {
                swal("Error", err.message, "error");
            }
        }

        await axios.post('/api/postSongComment', data);
        const res = await axios.post('/api/getUserComment', userData);
        const userName = res.data.userComment[0].fullname;
        const userPic = res.data.userComment[0].profilePic;
        event.preventDefault();
        props.onSaveCommentData({ userName: userName, userPic: userPic, createdDate: new Date().toLocaleString(), userComment: data.userComment });
        event.target.reset();
    }

    return (
        <div class="container">
            <div class="be-comment-block">
                <h1 class="comments-title">Comments </h1>
                {props.commentData.map(data =>
                    <div className="be-comment">
                        <div class="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img src={data.userPic} alt="" class="be-ava-comment" />
                            </a>
                        </div>
                        <div class="be-comment-content">

                            <span class="be-comment-name">
                                <a href="blog-detail-2.html">{data.userName}</a>
                            </span>
                            <span class="be-comment-time">
                                <i class="fa fa-clock-o"></i>
                                {data.createdDate}
                            </span>

                            <p class="be-comment-text">
                                {data.userComment}
                            </p>
                        </div>
                    </div>
                )}

                <hr style={{ margin: "50px 0px 0px 0px" }}></hr>
                <form class="form-block" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="be-ava-comment" />
                        <textarea class="form-input" required="" placeholder="Your Comment" onChange={textChangeHandle}></textarea>
                    </div>
                    <button class="comment-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default UserComment
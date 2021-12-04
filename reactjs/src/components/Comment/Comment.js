import "./Comment.css"
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actionLogin from "redux/actions/actionLogin";
import actionLogout from 'redux/actions/actionLogout';
import swal from "sweetalert";


import { useState } from "react"
function UserComment(props) {
    const dispatch = useDispatch();
    var userInfo = {
        email: "Undefined",
        profilePic: "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2Fistockphoto-1223671392-612x612.jpg?alt=media&token=c746eb6a-3d27-478f-8309-d1fef46c8930",
        role: 0,
    };

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
    const handleSubmit = (event) => {
        console.log("Check");
        event.preventDefault();
        props.onSaveCommentData(commentText);
        event.target.reset();
    }
    const handleSubmit1 = async (event) => {
        const data = {
            userId: userInfo.userId,
            songId: 1, //Xử lý sau
            userComment: event.target.value,
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
            }
            catch (err) {
                swal("Error", err.message, "error");
            }
        }
    }

    return (
        <div class="container">
            <div class="be-comment-block">
                <h1 class="comments-title">Comments (3)</h1>
                {props.commentData.map(data =>
                    <div className="be-comment">
                        <div class="be-img-comment">
                            <a href="blog-detail-2.html">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment" />
                            </a>
                        </div>
                        <div class="be-comment-content">

                            <span class="be-comment-name">
                                <a href="blog-detail-2.html">{data.commentName}</a>
                            </span>
                            <span class="be-comment-time">
                                <i class="fa fa-clock-o"></i>
                                {data.commentTime}
                            </span>

                            <p class="be-comment-text">
                                {data.commentText}
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
import "./Comment.css"
function UserComment() {
    return (
        <div class="container">
            <div class="be-comment-block">
                <h1 class="comments-title">Comments (3)</h1>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment" />
                        </a>
                    </div>
                    <div class="be-comment-content">

                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Đạt tiên sinh</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            Nov 28, 2021 at 3:14am
                        </span>

                        <p class="be-comment-text">
                            Pellentesque gravida tristique ultrices.
                            Sed blandit varius mauris, vel volutpat urna hendrerit id.
                            Curabitur rutrum dolor gravida turpis tristique efficitur.
                        </p>
                    </div>
                </div>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2FRita1.png?alt=media&token=6787fe32-6524-42dc-977f-d063811dcf67" alt="" class="be-ava-comment" />
                        </a>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Đạt tiên sinh</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            Nov 28, 2021 at 3:14am
                        </span>
                        <p class="be-comment-text">
                            Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
                        </p>
                    </div>
                </div>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment" />
                        </a>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Đạt tiên sinh</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            Nov 28, 2021 at 3:14am
                        </span>
                        <p class="be-comment-text">
                            Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                        </p>
                    </div>
                </div>
                <hr style={{ margin: "50px 0px 0px 0px" }}></hr>
                <form class="form-block" id="commentForm">
                    <div class="form-group">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="be-ava-comment" />
                        <textarea class="form-input" required="" placeholder="Your Comment"></textarea>
                    </div>
                </form>
                <button class="comment-submit" type="submit" form="commentForm" value="Submit">Submit</button>
            </div>
        </div>
    );
}
export default UserComment
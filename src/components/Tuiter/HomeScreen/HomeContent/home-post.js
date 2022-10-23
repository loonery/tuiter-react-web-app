import PostContent from "./post-content";

const HomePost = (post) => {
    return(
        // row corresponds to one post on the home screen
        <>
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle"
                         src={post.userImage}
                         height="48px" width="48px"
                         alt="Responsive Image"/>
                </div>

                {/*User Header*/}
                <div className="col-11 ps-4">
                    {/*Username, handle, and retuit text*/}
                     <div className="ps-1 pb-2 text-white">
                        <div className="fw-semibold">
                            {post.userName}
                            <i className="fa-sharp fa-solid fa-circle-check fa-1x"></i>
                            <span className="text-dark wd-small-font fw-light">
                                {post.userHandle} &cdot; {post.tuitTime}</span>
                        </div>
                        <div>
                            ${post.userTweet}
                        </div>
                     </div>

                     {/*Post Content*/}
                    <div>
                        <PostContent/>
                    </div>

                    {/*Icons*/}
                    <div className="d-flex pt-3 ps-4 pb-3">
                        <div className="flex-fill"><i className="fa-regular fa-comment"></i>
                            <span className="text-secondary wd-small-font">&ensp;${post.comments}</span></div>
                        <div className="flex-fill"> <i className="fa-solid fa-retweet"></i>
                            <span className="text-secondary wd-small-font">&ensp;${post.retuits}</span></div>
                        <div className="flex-fill"> <i className="fa-regular fa-comment"></i>
                            <span className="text-secondary wd-small-font">&ensp;${post.likes}</span></div>
                        <div className="flex-fill"> <i className="fa-solid fa-upload"></i></div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}
export default HomePost;

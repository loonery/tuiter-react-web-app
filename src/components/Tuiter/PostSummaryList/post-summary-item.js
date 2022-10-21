const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page" +
            " Applications or SPAs",
        "image": "../../../images/post-summary-images/react.png"
    }}) => {

        return(
            /* ReactJS Content */
            <li className="list-group-item">

                {/* row contains text aligned left and image aligned right */}
                <div className="row">

                    {/* Text inside image rows */}
                    <div className="col-8">
                        <div className="fw-light fs-6 text-secondary">{post.topic}</div>
                        <div className="fw-bold">{post.userName}  <i className="fa-solid fa-circle-check"></i>
                            <span className="fw-light fs-6 text-secondary"> - {post.time}</span>
                        </div>
                        <div className="fw-bold">{post.title}</div>
                    </div>
                
                    <div className="col-4">
                        <img className="float-end rounded-2"
                             src={post.image}
                             alt={"missing image"}
                             width="100"
                             height="100"/>
                    </div>
                </div>
            </li>
        );
}
export default PostSummaryItem;
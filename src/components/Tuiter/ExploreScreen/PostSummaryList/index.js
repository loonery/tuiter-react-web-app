import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        /*Under-image links -->*/
        <div>
            <ul className="rounded-1 list-group">
                {
                posts.map(post => {
                    return(<PostSummaryItem post={post}/>);
                })
                }
            </ul>
        </div>
    );
}
export default PostSummaryList;
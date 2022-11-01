import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";     // retrieve data from store, not from static file

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits);       // useSelector gets the state from our store
    return(
        /*Under-image links -->*/
        <div>
            <ul className="rounded-1 list-group">
                {
                postsArray.map(post => {
                    return(<PostSummaryItem key={post._id}
                                            post={post}/>);
                })
                }
            </ul>
        </div>
    );
}
export default PostSummaryList;
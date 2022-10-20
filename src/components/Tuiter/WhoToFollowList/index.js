import React from "react";
import whos from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        /* List of users*/
        <ul className="list-group rounded-1">

            {/* who to follow box */}
            <li className="list-group-item">
                <span className="fw-bold">Who to follow</span>
            </li>

            {/* User to follow */}
            {
                whos.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}
export default WhoToFollowList;
import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {

    // retrieve the 'who to follow' list from the state in store
    const whoArray = useSelector(state => state.who);

    return(
        /* List of users*/
        <ul className="list-group rounded-1">

            {/* who to follow box */}
            <li className="list-group-item">
                <span className="fw-bold">Who to follow</span>
            </li>

            {/* User to follow */}
            {
            whoArray.map(who => {
                return(<WhoToFollowListItem who={who}/>);
            })
            }
        </ul>
    );
}
export default WhoToFollowList;
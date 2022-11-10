// react and redux library imports
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

// component imports
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../reducers/tuits-reducer";


const TuitItem = ({tuit  = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "userImage": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "dislikes": 0,
        "disliked": false,
        "userHandle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and,being among the stars"
    }
}) => {

    const dispatch = useDispatch();     // get dispatch function
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <>
            <li className={"list-group-item"}>
                {/*row contains the tuit */}
                <div className={"row"}>
                    {/*user image here*/}
                    <div className={"col-2 pt-2 d-flex justify-content-center"}>
                        <img className={"rounded-circle"}
                             src={tuit.userImage}
                             height="48px" width="48px"
                             alt="Responsive Image"/>
                    </div>
                    {/*tuit content here */}
                    <div className={"col-10"}>

                        {/*use the garbage bin icon to call the function that deletes the tuit to which the garbage
                          bin is attached */}
                        <i className="fa-solid fa-xmark float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>

                        {/*outer div wraps tuit header and tuit content*/}
                        <div className={"pb-2"}>
                            <div className="fw-semibold">
                                {tuit.userName} <i className="fa-sharp fa-solid fa-circle-check fa-1x"></i>
                                <span className="text-muted wd-small-font fw-light"> {tuit.userHandle} - {tuit.tuitTime}</span>
                            </div>
                            <div>
                                {tuit.tuit}
                            </div>
                        </div>

                        {/*icons and tuit stats*/}
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </li>
        </>
    );
}
export default TuitItem;
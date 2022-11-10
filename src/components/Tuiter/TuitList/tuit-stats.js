import React from "react";
import './index.css';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({tuit  = {
    "_id": 234,
    "liked": true,
    "disliked": false,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "dislikes": 0,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and,being among the stars"
}
}) => {
    const dispatch = useDispatch();
    return(
    <>
        {/*Icons*/}
        <div className="d-flex justify-content-start pt-2">

            {/*replies*/}
            <div className="flex-fill"><i className="fa-regular fa-comment"></i>
                <span className="text-secondary wd-small-font">&ensp;{tuit.replies}</span></div>

            {/*retuits*/}
            <div className="flex-fill"> <i className="fa-solid fa-retweet"></i>
                <span className="text-secondary wd-small-font">&ensp;{tuit.retuits}</span></div>

            {/*likes*/}
                {/* liked-tuit */}
                {tuit.liked &&
                    <div className="flex-fill"> <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false
                    }))} className="fa-solid fa-heart"></i>
                    <span className="text-secondary wd-small-font">&ensp;{tuit.likes}</span></div>
                }
                {!tuit.liked &&
                    <div className="flex-fill"> <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true
                    }))} className="fa-regular fa-heart"></i>
                   <span className="text-secondary wd-small-font">&ensp;{tuit.likes}</span></div>
                }
                {tuit.disliked &&
                    <div className="flex-fill"> <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: false
                    }))} className="fa-solid fa-thumbs-down"></i>
                        <span className="text-secondary wd-small-font">&ensp;{tuit.dislikes}</span></div>
                }
                {!tuit.disliked &&
                    <div className="flex-fill"> <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                        disliked: true
                    }))} className="fa-regular fa-thumbs-down"></i>
                        <span className="text-secondary wd-small-font">&ensp;{tuit.dislikes}</span></div>
                }

            {/*share*/}
            <div className="flex-fill"> <i className="fa-solid fa-upload"></i></div>
        </div>
    </>
    );
};
export default TuitStats;
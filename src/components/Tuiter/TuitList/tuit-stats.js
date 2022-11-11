import React from "react";

const TuitStats = ({tuit  = {
    "_id": 234,
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and,being among the stars"
}
}) => {
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
                    <div className="flex-fill"> <i className="fa-solid fa-heart"></i>
                    <span className="text-secondary wd-small-font">&ensp;{tuit.likes}</span></div>
                }

                {/* non-liked tuit */}
                {!tuit.liked &&
                    <div className="flex-fill"> <i className="fa-regular fa-heart"></i>
                        <span className="text-secondary wd-small-font">&ensp;{tuit.likes}</span></div>
                }

            {/*share*/}
            <div className="flex-fill"> <i className="fa-solid fa-upload"></i></div>
        </div>
    </>
    );
};
export default TuitStats;
import React from 'react';
import './index.css';
import {useSelector} from "react-redux";

const Profile = ({profile = {
    "firstName": "Ryan",
    "lastName": "Looney",
    "handle": "@rloon",
    "profilePicture": "../images/profile_images/tuiter_profile_picture.jpg",
    "bannerPicture": "../images/profile_images/profile-banner.jpg",
    "bio": "Software developer, athlete, musician, and all around hobbyist!",
    "website": "youtube.com/r.loon",
    "location": "Boston, MA",
    "dateOfBirth": "01/09/1968",
    "dateJoined": "11/3/2022",
    "followingCount": 40,
    "followersCount": 23,
    "tuits": 1
}
}) => {
    return(
        // outer div wraps the profile section
        <div className="rounded-corners-all-around border">

            {/*arrow and user's legal name with number of tuits */}
            <div className="row">

                {/*arrow icon*/}
                <div className="col-1 ps-4 d-flex">
                    <i className="fa-solid fa-arrow-left align-self-center"></i>
                </div>

                {/*user's name and tuits*/}
                <div className="col-11 pb-1 ps-4">
                    <div className="fs-5 fw-bold">{profile.firstName} {profile.lastName}</div>
                    <div className="text-muted fs-6">{profile.tuits} tuits</div>
                </div>
            </div>

            {/*profile banner image*/}
            <div className="row position-relative">
                <img src= {profile.bannerPicture}
                     className="w-100"/>

                {/*profile picture overlaid over banner image*/}
                <div className="ms-4 pt-5">
                    <img src={profile.profilePicture}
                         className="rounded-circle w-25 position-absolute bottom-0"/>
                </div>

                {/*edit profile button*/}
                <div className="position-absolute bottom-0">
                    <button type={"button"} className="btn btn-light border rounded-pill float-end me-4">
                        <span className="fw-bold"> Edit profile </span>
                    </button>
                </div>
            </div>

            {/*user information*/}
            <div className="ps-3 pt-4">

                {/*username and handle*/}
                <div className="fw-bold fs-5">{profile.firstName} {profile.lastName}</div>
                <div className="text-muted fs-6">{profile.handle}</div>

                 {/* user Bio */}
                <div className="pt-3">
                    {profile.bio}
                </div>

                {/*icons*/}
                <div className="pt-3 d-flex justify-content-start">
                    <div>
                        <i className="flex-fill fa-regular fa-map"></i>
                        <span className="text-muted fs-6">&ensp;{profile.location}</span>
                    </div>

                    <div>
                        <i className="fa-regular fa-calendar ps-3"></i>
                        <span className="text-muted fs-6">&ensp;{profile.dateOfBirth}</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-user ps-3"></i>
                        <span className="text-muted fs-6">&ensp;{profile.dateJoined}</span>
                    </div>
                </div>

                {/*following, followers*/}
                <div className="pt-3 pb-3 d-flex justify-content-start">
                    <div className="fw-bold">{profile.followingCount}&ensp;<span className="text-muted fw-normal fs-6">Following</span></div>
                    &emsp;
                    <div className="fw-bold">{profile.followersCount}&ensp;<span className="text-muted fw-normal fs-6">Followers</span></div>
                </div>
            </div>
        </div>
    );
}
export default Profile;
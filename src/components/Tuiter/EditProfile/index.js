import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {saveProfileChanges} from "../reducers/profile-reducer";
import "./index.css";

const EditProfile = ({profile = {
    "firstName": "Ryan",
    "lastName": "Looney",
    "handle": "@rloon",
    "profilePicture": "../images/profile_images/tuiter_profile_picture.jpg",
    "bannerPicture": "../images/profile_images/profile-banner.jpg",
    "bio": "Software developer, athlete, musician, and all around hobbyist!",
    "website": "youtube.com/r.loon",
    "location": "Boston, MA",
    "dateOfBirth": "1997-01-09",
    "dateJoined": "09/01/2022",
    "followingCount": 40,
    "followersCount": 23,
    "tuits": 1
}
}) => {

    // holding local state of this
    let [nameState, setName] = useState(profile.firstName + " " + profile.lastName);
    let [bioState, setBio] = useState(profile.bio);
    let [locationState, setLocation] = useState(profile.location);
    let [birthdayState, setBirthday] = useState(profile.dateOfBirth);
    let [websiteState, setWebsite] = useState(profile.website);

    // navigating back to profile (https://stackabuse.com/programmatically-navigate-using-react-router/)
    const navigate = useNavigate(); const location = useLocation(); const dispatch = useDispatch();
    const saveThisProfile = () => {

        // get the local state of the name to pass to the user
        const parsedName = nameState.split(" ");

        // naive validation input for name
        if (parsedName.length < 2) {
            alert("name field must include first and last name seperated by a space character");
            return;
        }

        // the changed profile object may contain any of the fields that are possible to change on this page
        const changedProfile = {
            firstName: parsedName[0],
            lastName: parsedName[1],
            bio: bioState,
            location: locationState,
            dateOfBirth: birthdayState,
            website: websiteState
        }
        dispatch(saveProfileChanges(changedProfile));

        // after saving, navigate back to the profile screen
        const path = location.pathname.replace('/edit_profile', '');
        navigate(path);
    }


    return(
        // outer div wraps the profile section
        <div className="border">

            {/*arrow and user's legal name with number of tuits */}
            <div className="row">

                {/* x icon*/}
                <div className="col-1 ps-4 d-flex">
                    <Link to={"/tuiter/profile"}
                          className="fa-solid fa-x align-self-center text-dark text-decoration-none"/>
                </div>

                {/* Edit profile header */}
                <div className="col-8 pb-2 pt-2 ps-4">
                    <div className="fs-5 fw-bold">Edit Profile</div>
                </div>
                <div className="col-3">
                    <button className="btn btn-sm btn-dark rounded-pill w-50 float-end mt-2 me-4"
                            onClick={saveThisProfile}>
                        Save
                    </button>
                </div>
            </div>

            {/*profile banner image*/}
            <div className="row position-relative">
                <img src= {"../" + profile.bannerPicture} className="w-100 wd-change-image"/>
                <i className="fa-regular fa-circle fa-4x position-absolute wd-banner-circle-overlay"></i>
                <i className="fa-solid fa-camera fa-2x position-absolute wd-banner-camera-overlay"></i>

                {/*profile picture overlaid over banner image*/}
                <div className="ms-4 pt-5">
                    <img src={"../" + profile.profilePicture}
                         className="rounded-circle w-25 wd-change-image position-absolute bottom-0"/>
                    <i className="fa-regular fa-circle fa-4x position-absolute wd-camera-circle-overlay"></i>
                    <i className="fa-solid fa-camera fa-2x position-absolute wd-camera-overlay"></i>
                </div>
            </div>

            {/*user information*/}
            <div className="ps-3 pt-4">

                {/*username and handle*/}
                <div className="fw-bold fs-5"></div>

                {/*name input*/}
                <div className="form-floating mb-3 me-3">
                    <input type="name"
                           className="form-control"
                           id="nameInput"
                           placeholder="Your name"
                           value={nameState}
                           onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="nameInput">Name</label>
                </div>

                {/* user Bio input */}
                <div className="form-floating mb-3 me-3">
                    <textarea type="input"
                           className="form-control"
                           id="bioInput"
                           placeholder="Your name"
                           value={bioState}
                           onChange={(event) => setBio(event.target.value)}/>
                    <label htmlFor="bioInput">Bio</label>
                </div>

                {/*{location, birthdate, join date inputs}*/}
                <div className="pt-3 d-flex flex-fill me-3">
                    {/*name input*/}
                    <div className="form-floating mb-3 me-3">
                        <input type="name"
                                   className="form-control date"
                                   id="locationInput"
                                   placeholder="Your name"
                                   value={locationState}
                                   onChange={(event) => setLocation(event.target.value)}
                            />
                            <label htmlFor="locationInput">Location</label>
                    </div>

                    {/*birthday*/}
                    <div className="form-floating mb-3 me-3">
                        <input type="date"
                               className="form-control"
                               id="birthdateInput"
                               placeholder="1900-01-01"
                               defaultValue={birthdayState}
                               onChange={(event) => setBirthday(event.target.value)}
                        />
                        <label htmlFor="birthdateInput">Birthday</label>
                    </div>
                </div>

                {/*website input*/}
                <div className="form-floating mb-3 me-3">
                    <input type="input"
                              className="form-control"
                              id="websiteInput"
                              placeholder="Website"
                              value={websiteState}
                              onChange={(event) => setWebsite(event.target.value)}/>
                    <label htmlFor="websiteInput">Website</label>
                </div>

                {/* Switch to professional option */}
                <div className="pt-3 pb-3">
                    <div>
                        Switch to professional
                        <div className="float-end me-3">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;
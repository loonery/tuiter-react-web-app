import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import React from "react";
import Profile from "./profile";
import {useSelector} from "react-redux";

const ProfileScreen = () =>{
    const profileData = useSelector(state => state.profile);
    const myProfile = profileData[0];
    return (
        <div className={"container pt-3"}>
            <div class="row">
                {/*Sidebar Component Loaded In*/}
                <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active="Profile"/>
                </div>
                {/*Main Content Component Loaded In */}
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <Profile profile={myProfile}/>
                </div>
                {/*Navigation Sidebar Component Loaded In*/}
                <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;


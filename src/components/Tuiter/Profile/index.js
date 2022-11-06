import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import React from "react";
import Profile from "./profile";
import {useSelector} from "react-redux";
import EditProfile from "../EditProfile";
import {Route, Routes} from "react-router-dom";

const ProfileScreen = () =>{
    const profileData = useSelector(state => state.profile);
    return (
        <div className={"container pt-3"}>
            <div class="row">
                {/*Sidebar Component Loaded In*/}
                <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active="Profile"/>
                </div>
                {/*Main Content Component Loaded In */}
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    {/*https://reactrouter.com/en/v6.3.0/getting-started/overview*/}
                    <Routes>
                        <Route path="/" element={<Profile profile={profileData}/>}/>
                        <Route path="/edit_profile" element={<EditProfile profile={profileData}/>}/>
                    </Routes>
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


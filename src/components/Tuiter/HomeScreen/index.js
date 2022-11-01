// import react library
import React from 'react';

// import homemade components
import NavigationSidebar from "../NavigationSidebar/index.js";
import TuitsList from "../tuits/tuits-list";
import WhoToFollowList from "../WhoToFollowList";

const HomeScreen = () => {
    return (
        <div className={"container pt-3"}>
            <div class="row">
                {/*Sidebar Component Loaded In*/}
                <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active="Home"/>
                </div>
                {/*Main Content Component Loaded In */}
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <TuitsList/>
                </div>
                {/*Navigation Sidebar Component Loaded In*/}
                <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeContent from "./HomeContent";
import React from 'react';
const HomeScreen = () => {
    return (
        <div className={"container"}>
            <div class="row mt-2">
                {/*Sidebar Component Loaded In*/}
                <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active="Home"/>
                </div>
                {/*Main Content Component Loaded In */}
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <HomeContent/>
                </div>
                {/*Navigation Sidebar Component Loaded In*/}
                <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;
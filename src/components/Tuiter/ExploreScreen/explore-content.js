// react library imports
import React from "react";

// styling import
import "./index.css";

// user-made component imports
import PostSummaryList from "../PostSummaryList"
import NavigationTabs from "../NavigationTabs";


const ExploreContent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">

                    {/* Position relative div holds the search bar and the embedded
                         magnifying  glass, which is an absolutely positioned icon */}
                    <div className="position-relative">

                        {/* Search bar */}
                        <label className="w-100 pb-2">
                            {/* pad from the start */}
                            <input className="rounded-pill form-control ps-5"
                                   placeholder="Search Tuiter"/>
                        </label>

                        {/* Magnifying glass */}
                        <span className="position-absolute wd-magnifying-search-tuiter">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>

                {/* Blue Gear (Fontawesome) */}
                <div className="col-1">
                    <i className="fa-solid fa-gear fa-2x" style={{color: "#0d6efd"}}></i>
                </div>
            </div>

            {/* tabs */}
            <NavigationTabs/>

            {/* image with overlaid text */}
            <div className="pb-2 position-relative">
                <img width="100%"
                     alt={"Missing Image"}
                     src="./images/explore_images/starship.webp"/>

                {/*Tuiter Image Text*/}
                <h1 className="position-absolute bottom-0 text-muted ps-2 pb-2"> SpaceX's Starship</h1>
            </div>

            {/* Links */}
            <PostSummaryList/>
        </>
    )
}
export default ExploreContent;

import NavigationSidebar from "../NavigationSidebar";
import ExploreContent from "./explore-content";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <div className={"container pt-3"}>
            <div className="row pt-2">
                {/* Sidebar Component Loaded In */}
                <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active="Explore"/>
                </div>

                {/* Main Content Component Loaded In */}
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10" style={{"position": "relative"}}>
                    <ExploreContent/>
                </div>

                {/* Navigation Sidebar Component Loaded In */}
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default ExploreScreen;
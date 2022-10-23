import React from "react"
import {Link} from "react-router-dom";

const activeTab = (link, active) => {
    active = active.toLowerCase();
    link = link.toLowerCase();
    return (active === link ? 'active' : 'inactive')
}

const NavigationSidebar = ({active = 'Home'}) =>
    {
        return (
            <>
            {/* Navigation Buttons (list-group, padded at bottom)*/}
            <div className="list-group pb-2 rounded-1">

                {/* Tuiter */}
                <Link to={"/"}
                      className="list-group-item">
                    <i className="fa-brands fa-twitter"></i>
                </Link>

                {/* Home */}
                <Link to={"/tuiter/home"}
                   className={`list-group-item list-group-item-action ${activeTab("Home", active)}`}>
                    <i className="fa fa-home"></i> <span className="d-none d-xl-inline-block"> Home</span>
                </Link>

                {/* Explore */}
                <Link to={"/tuiter/explore"}
                   className={`list-group-item list-group-item-action ${activeTab("Explore", active)}`}>
                    <i className="fa-solid fa-hashtag"></i> <span className="d-none d-xl-inline-block"> Explore</span>
                </Link>

                {/* Notifications */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("Notifications", active)}`}>
                    <i className="fa-solid fa-bell"></i> <span className="d-none d-xl-inline-block"> Notifications</span></a>

                {/* Messages */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("Messages", active)}`}>
                    <i className="fa fa-envelope" aria-hidden="true"></i> <span className="d-none d-xl-inline-block "> Messages</span></a>

                {/* Bookmarks */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("Bookmarks", active)}`}>
                    <i className="fa-sharp fa-solid fa-bookmark"></i> <span className="d-none d-xl-inline-block"> Bookmarks</span></a>

                {/* Lists */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("Lists", active)}`}>
                    <i className="fa-solid fa-list"></i> <span className="d-none d-xl-inline-block"> Lists</span></a>

                {/* Profile */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("Profile", active)}`}>
                    <i className="fa-solid fa-user"></i> <span className="d-none d-xl-inline-block"> Profile</span></a>

                {/*More */}
                <a href="#"
                   className={`list-group-item list-group-item-action ${activeTab("More", active)}`}>
                    <i className="fa-solid fa-circle-minus"></i> <span className="d-none d-xl-inline-block"> More</span></a>
            </div>
            {/* Tuit Button Rendered Under Navigation Links */}
            <button className="btn btn-primary rounded-pill w-100">
                Tuit
            </button>
            </>
        );
    }

// export this function which produces static html as a function
export default NavigationSidebar;
import React from "react";
const NavigationTabItem = ({tab = {
        text: "For you",
        link: "#",
        active: true,
        hideIfWrapping: false,
    }
}) => {
    let anchorClass = "nav-link";
    let listItemClass = "nav-item text-decoration-none";

    // JSON data determines if this tab is selected
    if (tab.active === true) {anchorClass = anchorClass.concat(" active");}

    // JSON data determines if we hide this tab
    if (tab.hideIfWrapping === true) {listItemClass = listItemClass.concat(" d-none d-md-block");}

    return(
        <li className={listItemClass}>
            <a className={anchorClass} href={tab.link}>{tab.text}</a>
        </li>
    );
}
export default NavigationTabItem;
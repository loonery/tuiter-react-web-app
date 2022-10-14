const className = (tab) => {

    let activeString = "";
    let wrapString = "";
    let navLink = "nav-link"

    // JSON data determines if this tab is selected
    if (tab.active === true) {
        activeString = activeString.concat(" active");
    }

    // JSON data determines if we hide this tab
    if (tab.hideIfWrapping === true) {
        wrapString = wrapString.concat(" d-none d-md-block");
    }
    navLink = navLink.concat(activeString).concat(wrapString);
    return navLink;
}

const navigationTabItem = (tab) => {

    return(`
        <li class="nav-item">
            <a class=${(className(tab))} href=${tab.link}>${tab.text}</a>
        </li>
    `)
}
export default navigationTabItem;
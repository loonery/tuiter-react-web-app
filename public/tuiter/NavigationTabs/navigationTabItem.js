const navigationTabItem = (tab) => {

    let activeString = "";
    let wrapString = "";

    // JSON data determines if this tab is selected
    if (tab.active === true) {
        activeString = " active";
    }

    // JSON data determines if we hide this tab
    if (tab.hideIfWrapping === true) {
        wrapString = " d-none d-md-block";
    }

    return(`
        <li className="nav-item">
            <a className="nav-link${activeString}${wrapString}" href=${tab.link}>${tab.text}</a>
        </li>
    `)
}
export default navigationTabItem;
const navigationTabItem = (tab) => {

    let anchorClass = "nav-link";
    let listItemClass = "nav-item";

    // JSON data determines if this tab is selected
    if (tab.active === true) {
        anchorClass = anchorClass.concat(" active");
    }

    // JSON data determines if we hide this tab
    if (tab.hideIfWrapping === true) {
        listItemClass = listItemClass.concat(" d-none d-md-block");
    }

    return(`
        <li class="${anchorClass}">
            <a class="${listItemClass}" href=${tab.link}>${tab.text}</a>
        </li>
    `)
}
export default navigationTabItem;
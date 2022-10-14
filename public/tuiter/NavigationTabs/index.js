import navigationTabItem from "./navigationTabItem.js";
import tabs from "./tabs.js";
const navigationTabList = () => {

    return(`
        ${
            tabs.map(tab => {
                return (navigationTabItem(tab));
            }).join('')
        }
    `);
}
export default navigationTabList;
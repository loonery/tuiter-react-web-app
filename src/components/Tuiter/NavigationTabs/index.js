import tabs from "./tabs.json";
import NavigationTabItem from "./navigation-tab-item";
import React from "react";

const NavigationTabs = () => {
    return(
        <>
            <ul className="nav nav-tabs mb-2">
                {
                tabs.map(tab => {
                    return (
                        <NavigationTabItem tab={tab}/>);
                })
                }
            </ul>
        </>
    );
}
export default NavigationTabs;
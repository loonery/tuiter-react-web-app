import React from "react";

/**
 * Declares styles that can be used in our components
 */
const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return(
        <div>
            <h1>Styles</h1>
            <div style={{"backgroundColor": "lightyellow",
                "color": "black", padding: "10px"}}>
                Yellow background</div>
            <div style={bgRed}>
                Red background</div>
            <div style={bgBlue}>
                Blue background</div>
        </div>
    );
};
export default Styles;
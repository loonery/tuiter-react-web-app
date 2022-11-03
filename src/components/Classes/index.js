import React from "react";
import './index.css';
const Classes = () => {
    const dangerous = false;
    return(
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} 
                                    wd-fg-black wd-padding-10px`}>
                Dynamic Dangerous background</div>

        </div>
    )
};
export default Classes;
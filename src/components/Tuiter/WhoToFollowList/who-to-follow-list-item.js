import React from "react";
const WhoToFollowListItem = ({
    who = {
        avatarIcon: '../../../images/who-to-follow-images/java.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return(
        <>
            <li className="list-group-item float-none">
                {/*Each List Item contains a Row*/}
                <div className="row">
                    {/*Who to follow Image*/}
                    <div className="float-start">
                        <img className="rounded-circle float-start"
                             src={who.avatarIcon}
                             height="48px" width="48px"/>

                        {/*Username and handle */}
                        <div className="fw-bold float-start ps-2">
                            {who.userName} <i className="fa-sharp fa-solid fa-circle-check fa-1x"></i>
                            <div className="fw-light">
                                @{who.handle}
                            </div>
                        </div>

                        {/*Follow Button */}
                        <button className="float-end mt-2 btn btn-primary btn-sm rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}
export default WhoToFollowListItem;

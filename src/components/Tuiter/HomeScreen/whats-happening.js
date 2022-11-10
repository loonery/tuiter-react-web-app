import React, {useState} from "react";
import {createTuit} from "../reducers/tuits-reducer";

import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../../services/tuits-thunks";

const WhatsHappening = () => {

    // manage local state of the what's happening input
    let [whatsHappening, setWhatsHappening] = useState('');

    // dispatch to the global state handlers
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit =  {
            tuit: whatsHappening            // newTuit maps tuit to the text inside the textarea
        }
        dispatch(createTuitThunk(newTuit));    // dispatch to the createTuit reducer the information contained in the
    }                                          // textarea
    return (
        <div className="row">
            <div className="col-auto">
                <img className="rounded-circle"
                     width="48px"
                     height="48px"
                     src="../images/profile_images/tuiter_profile_picture.jpg"
                     alt={"responsive image"}
                />
            </div>
            <div className="col-10">
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="fa-regular fa-image me-4"></i>
                        <i className="fa-regular fa-file-video me-4"></i>
                        <i className="fa-solid fa-chart-column me-4"></i>
                        <i className="fa-regular fa-map me-4"></i>
                        <i className="bi bi-geo-alt me-4"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;
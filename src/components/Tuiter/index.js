// styling imports
import "../../vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.min.css"
import "../../index.css"

// React imports
import React from "react";
import WhoToFollowList from "./WhoToFollowList";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

// configure a store using the 'who' slice
const store = configureStore(
    {reducer: {who: whoReducer}});

const Tuiter = () => {
    return(
        <Provider store={store}>
            <WhoToFollowList/>
        </Provider>
    );
};
export default Tuiter;
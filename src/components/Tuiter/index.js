// styling imports
import "../../vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.min.css"
import "../../index.css"

// React library imports
import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

// reducer imports
import whoReducer from "./reducers/who-reducer";

// react components
import tuitsReducer from "./reducers/tuits-reducer";
import ProfileScreen from "./Profile";
import profileReducer from "./reducers/profile-reducer";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";

// configure a store using the data slices we are declaring in the 'reducers' directory
const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

const Tuiter = () => {
    return(
        <Provider store={store}>
            <Routes>
                {/*any derivative of the profile path leads to here*/}
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/profile/*" element={<ProfileScreen/>}/>
                <Route path="/explore" element={<ExploreScreen/>}/>
            </Routes>
        </Provider>
    );
};
export default Tuiter;
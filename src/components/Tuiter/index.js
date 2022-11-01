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
import HomeScreen from "./HomeScreen";


// configure a store using the data slices we are declaring in the 'reducers' directory
const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer}});

const Tuiter = () => {
    return(
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    );
};
export default Tuiter;
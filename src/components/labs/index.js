import React from "react";
import Classes from "../classes";
import Styles from "./styles";
import TodoList from "../todo/TodoList";
import {Link} from "react-router-dom";

/**
 * Labs relies on the classes component.
 */
const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <Styles />
            <Classes />
            <TodoList/>
        </>
    )
};
export default Labs;
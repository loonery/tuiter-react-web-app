import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment 6</Link> |
            <Link to="a7">Assignment 7</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}
export default Nav;
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from '../../../services/tuits-thunks';
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData); // get tuits and loading flag from reducer
    const dispatch = useDispatch();

    // invoke the findTuitsThunk to fetch tuits from the server and put them in the front-end store
    useEffect(() => {dispatch(findTuitsThunk())}, [])

    return (
        <>
            <ul className={"list-group"}>
                {/*tuits are still loading, generate a message*/}
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {/*render tuits once loading is complete*/}
                {
                    !loading &&
                    tuits.map(tuit => {
                        return <TuitItem key={tuit._id}
                                         tuit={tuit}/>
                    })
                }
            </ul>
        </>
    )
}
export default TuitsList;
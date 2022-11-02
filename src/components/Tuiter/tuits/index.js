import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuitArray = useSelector(state => state.tuits);
    return (
        <>
            <ul className={"list-group"}>
                {
                    tuitArray.map(tuit => {
                        return <TuitItem key={tuit._id}
                                         tuit={tuit}/>
                    })
                }
            </ul>
        </>
    )
}
export default TuitsList;
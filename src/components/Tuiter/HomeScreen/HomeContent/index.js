import HomePost from "./home-post";
import posts from "./home-posts.json"

const HomeContent = () => {
    return (
        <div>
            <ul className={"rounded-0 list-group"}>
                {
                posts.map(post => {
                    return(<HomePost post={post}/>);
                })
                }
            </ul>
        </div>
    );
}
export default HomeContent;
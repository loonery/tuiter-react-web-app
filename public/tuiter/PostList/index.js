import posts from "./homePosts.js";
import PostItem from "./PostItem.js";

const PostItems = () => {

    return(`
        <!-- Under-image links -->
        <ul class="rounded-0 list-group">
            ${posts.map(post => {
                    return(PostItem(post));
                }).join('')
            }
        </ul>
    `)

}
export default PostItems;
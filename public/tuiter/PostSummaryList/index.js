import posts from "./posts.js";
import postSummaryItem from "./postSummaryItem.js";
const postSummaryList = () => {
    return(`
        <!-- Under-image links -->
        <ul class="rounded-0 list-group">
            ${
            posts.map(post => {
                return(postSummaryItem(post));
            }).join('')
            }
        </ul>
    `)
}
export default postSummaryList;
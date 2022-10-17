import posts from "./posts.js";
import postSummaryItem from "./postSummaryItem.js";
const postSummaryList = () => {
    return(`
        <!-- Under-image links -->
    <div>
        <ul class="rounded-1 list-group">
            ${
            posts.map(post => {
                return(postSummaryItem(post));
            }).join('')
            }
        </ul>
    </div>
    `)
}
export default postSummaryList;
import who from "./who";
import WhoToFollowListItem from "./WhoToFollowListItem";

const whoToFollowList = () => {
    return(`
        <!--List of users-->
        <ul class="list-group rounded-1">
    
            <!-- who to follow box -->
            <li class="list-group-item">
                <span class="fw-bold">Who to follow</span>
            </li>
    
            <!-- User to follow -->
            ${
                who.map(user => {
                    return(WhoToFollowListItem(user));
                }).join('')
            }
        </ul>
    `)
}
export default whoToFollowList;
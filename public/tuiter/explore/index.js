import navigationSidebar from "../NavigationSidebar";
import whoToFollowList from "../WhoToFollowList";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <!-- Main Content Component Loaded In -->
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${navigationSidebar()}
            </div>
            <!-- Main Content Component Loaded In -->
            <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                <h3>Main Content</h3>
            </div>
            <!-- Navigation Sidebar Component Loaded In -->
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${whoToFollowList()}
            </div>
            
             
        </div>
    `);
}
$(exploreComponent);

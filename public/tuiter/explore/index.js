import navigationSidebar from "../NavigationSidebar";
import whoToFollowList from "../WhoToFollowList";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning">
                ${navigationSidebar}
            </div>
            
            <!-- Navigation Sidebar Component Loaded In -->
            <div class="col-10 col-lg-7 col-xl-6 bg-primary">
                <h3>Main Content</h3>
            </div>
            
            <!-- Navigation Sidebar Component Loaded In -->
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
                ${whoToFollowList}
            </div>
        </div>
    `);
}
$(exploreComponent);

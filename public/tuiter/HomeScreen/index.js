import navigationSidebar from "../NavigationSidebar/index.js";
import postSummaryList from "../PostSummaryList/index.js";
import PostItems from "../PostList/index.js";

function exploreComponent() {
    $('#wd-homeScreen').append(`
        <div class="row mt-2">
            <!-- Sidebar Component Loaded In -->
            <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
                ${navigationSidebar()}
            </div>
            <!-- Main Content Component Loaded In -->
            <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                ${PostItems()}
            </div>
            <!-- Navigation Sidebar Component Loaded In -->
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${postSummaryList()}
            </div>
        </div>
    `);
}
$(exploreComponent);
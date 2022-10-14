import postSummaryList from "../PostSummaryList/index.js";
import navigationTabList from "../NavigationTabs/index.js";
const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">

                <!-- Position relative div holds the search bar and the embedded
                     magnifying  glass, which is an absolutely positioned icon -->
                <div class="position-relative">

                    <!-- Search bar -->
                    <label class="w-100 pb-2">

                        <!-- pad from the start -->
                        <input class="rounded-pill form-control ps-5"
                               placeholder="Search Tuiter">
                    </label>

                    <!-- Magnifying glass -->
                    <span class="position-absolute wd-magnifying-search-tuiter">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>

            <!-- Blue Gear (Fontawesome) -->
            <div class="col-1">
                <i class="fa-solid fa-gear fa-2x" style="color: #0d6efd"></i>
            </div>
        </div>
        
        <!-- tabs -->
        <ul class="nav nav-tabs mb-2">
            ${navigationTabList()}
        </ul>
        
        <!-- image with overlaid text -->
        <div class="pb-2 position-relative">
            <img width="100%"
                 src="../images/explore_images/starship.webp"
                 style="overflow: clip">

            <!--Tuiter Image Text-->
            <h1 class="position-absolute bottom-0 text-muted ps-2"> SpaceX's Starship</h1>
        </div>
        
        <!-- Links -->
        ${postSummaryList()}
    `);
}
export default ExploreComponent;
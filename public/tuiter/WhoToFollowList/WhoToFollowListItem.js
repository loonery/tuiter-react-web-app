const whoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item float-none">
            <!-- Each List Item contains a Row-->
            <div class="row">
                <!--Who to follow -->
                <div class="float-start">
                    <img class="rounded-circle float-start"
                         src=${who.avatarIcon}
                         height="48px" width="48px">
    
                    <!--Username and handle -->
                    <div class="fw-bold float-start ps-1">
                        ${who.userName} <i class="fa-sharp fa-solid fa-circle-check fa-1x"></i>
                        <div class="fw-light">
                            ${who.handle}
                        </div>
                    </div>
    
                    <!-- Follow Button -->
                    <div class="float-end pt-2">
                        <button class="btn btn-primary btn-sm rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </li>
    `)
}
export default whoToFollowListItem;
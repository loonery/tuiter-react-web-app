const content = (post) => {
    let content = true;
    if (post.contentPreview === '') {
        content = false;
    }

    // if there is content, then we render it, otherwise, we do not.
    if (content) {
        return(`

            <div>                                
                <img src="${post.contentImage}" 
                width="100%" 
                class="border border-secondary rounded-top" 
                alt="Responsive Image"
            </div>

            <!-- Content Text -->
            <div class="border border-secondary border-top-0 rounded-bottom pt-1">
                <div class="ps-2 pb-2">
                    <span class="text-white">${post.contentTitle}</span>
                    <br>
                    <span class="text-dark">${post.contentPreview}</span>
                    <br>
                    <i class="wd-rem-75 fa-solid fa-link"> &ensp; </i><span class="text-dark">${post.contentLink}</span>
                </div>
            </div>
        
        `);
    } else {
        return(`
            <div>                                
                <img src="${post.contentImage}" 
                width="100%" 
                class="border border-secondary rounded" 
                alt="Responsive Image"
            </div>
        `);
    }
}


const PostItem = (post) => {

    return(`
        <!-- Outer Row -->
    <div>
        <div class="row">
            <div class="col-1">
                <img class="rounded-circle"
                             src=${post.userImage}
                             height="48px" width="48px" alt="Responsive Image">            
            </div>
            
            <!-- User Header -->
            <div class="col-11 ps-4">
                <!--Username, handle, and retuit text -->
                 <div class="ps-1 pb-2 text-white">
                    <div class="fw-semibold">   
                        ${post.userName} <i class="fa-sharp fa-solid fa-circle-check fa-1x"></i> 
                        <span class="text-dark wd-small-font fw-light"> ${post.userHandle} &cdot; ${post.tuitTime}</span>
                    </div>
                    <div>
                        ${post.userTweet}
                    </div>
                 </div>
                 
                 <!-- Post Content -->
                <div>
                    ${content(post)}
                </div>
                
                <!-- Icons -->
                <div class="d-flex pt-3 ps-4 pb-3">
                    <div class="flex-fill"><i class="fa-regular fa-comment"></i> <span class="text-secondary wd-small-font">&ensp;${post.comments}</span></div>
                    <div class="flex-fill"> <i class="fa-solid fa-retweet"></i> <span class="text-secondary wd-small-font">&ensp;${post.retuits}</span></div>
                    <div class="flex-fill"> <i class="fa-regular fa-comment"></i> <span class="text-secondary wd-small-font">&ensp;${post.likes}</span></div>
                    <div class="flex-fill"> <i class="fa-solid fa-upload"></i></div>
                </div>
            </div>
        </div>
        <hr>
    
    </div>
    `)
}
export default PostItem;

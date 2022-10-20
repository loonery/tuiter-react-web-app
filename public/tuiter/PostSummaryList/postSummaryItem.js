const PostSummaryItem = (post) => {
    return(`
        <!-- ReactJS Content -->
        <li class="list-group-item">

            <!-- row contains text aligned left and image aligned right -->
            <div class="row">
        
                <!-- Text inside image rows -->
                <div class="col-8">
                    <div class="fw-light fs-6 text-secondary">${post.topic}</div>
                    <div class="fw-bold">${post.userName}
                        <i class="fa-solid fa-circle-check"></i></i>
                        <span class="fw-light fs-6 text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bold">${post.title}
                    </div>
                </div>
                <div class="col-4">
                    <img class="float-end rounded-2"
                         src=${post.image}
                         width="100"
                         height="100">
                </div>
            </div>
        </li>
    `)
}
export default PostSummaryItem;
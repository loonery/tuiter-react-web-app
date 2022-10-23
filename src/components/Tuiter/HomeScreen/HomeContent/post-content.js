const PostContent = (
    {post = {
        "userName": "Elon Musk",
        "userHandle": "@elonmusk",
        "userImage": "../images/home_images/elon.jpg",
        "tuitTime": "23h",
        "userTweet": "Amazing show about @inspiration4x mission!",
        "contentTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "contentPreview": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
        "contentLink": "netflix.com",
        "contentImage": "../images/home_images/inspiration.jpg",
        "comments": "4.2k",
        "retuits": "3.5k",
        "likes": "37.5k"
    }}) => {

    // content is assumed to be in the post until we find that it has no preview
    let content = true;
    if (post.contentPreview === '') {
        content = false;
    }

    // if there is content, then we render it, otherwise, we do not.
    if (content) {
        return(
            <>
                <div>
                    <img src={post.contentImage} 
                    width="100%" 
                    className="border border-secondary rounded-top" 
                    alt="Responsive Image"/>
                </div>

                <!-- Content Text -->
                <div className="border border-secondary border-top-0 rounded-bottom pt-1">
                    <div className="ps-2 pb-2">
                        <span className="text-white">{post.contentTitle}</span>
                        <br/>
                        <span className="text-dark">{post.contentPreview}</span>
                        <br/>
                        <i className="wd-rem-75 fa-solid fa-link"> &ensp; </i>
                            <span className="text-dark">{post.contentLink}</span>
                    </div>
                </div>
          </>
        )
    } else {
        return(
            <div>                                
                <img src={post.contentImage}
                width="100%"
                className="border border-secondary rounded" 
                alt="Responsive Image"/>
            </div>
        );
    }
}
export default PostContent;
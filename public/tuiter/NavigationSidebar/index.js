const active = (tab, props) => {
    console.log(tab);
    return (props.active === tab ? 'active' : 'inactive')
}

const navigationSidebar = (props) => {
    return(`
        <!-- Navigation Buttons (list-group, padded at bottom) -->
        <div class="list-group pb-2 rounded-1">
        
            <!-- Tuiter -->
            <a href="#" class="list-group-item"><i class="fa-brands fa-twitter"></i></a>

            <!-- Home -->
            <a href="../HomeScreen/index.html"
               class="list-group-item list-group-item-action ${active("Home", props)}">
                <i class="fa fa-home"></i> <span class="d-none d-xl-inline-block"> 
                Home</span>
            </a>

            <!-- Explore -->
            <a href="./index.html"
               class="list-group-item list-group-item-action ${active("Explore", props)}">
                <i class="fa-solid fa-hashtag"></i> 
                <span class="d-none d-xl-inline-block"> Explore</span></a>

            <!-- Notifications -->
            <a href="#" class="list-group-item list-group-item-action ${active("Notifications", props)}">
                <i class="fa-solid fa-bell"></i> 
                <span class="d-none d-xl-inline-block"> Notifications</span></a>

            <!-- Messages -->
            <a href="#"
               class="list-group-item list-group-item-action ${active("Messages", props)}">
                <i class="fa fa-envelope" aria-hidden="true"></i> 
                <span class="d-none d-xl-inline-block "> Messages
            </span></a>

            <!-- Bookmarks -->
            <a href="#"
               class="list-group-item list-group-item-action ${active("Bookmarks", props)}">
                <i class="fa-sharp fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline-block"> Bookmarks</span></a>

            <!-- Lists -->
            <a href="#"
               class="list-group-item list-group-item-action ${active("Lists", props)}">
                <i class="fa-solid fa-list"></i> 
                <span class="d-none d-xl-inline-block"> Lists</span></a>

            <!-- Profile -->
            <a href="#" class="list-group-item list-group-item-action ${active("Profile", props)}">
                <i class="fa-solid fa-user"></i> 
                <span class="d-none d-xl-inline-block"> Profile</span></a>

            <!--More -->
            <a href="#"
               class="list-group-item list-group-item-action ${active("More", props)}">
                <i class="fa-solid fa-circle-minus"></i> 
                <span class="d-none d-xl-inline-block"> More</span></a>
        </div>
        <!-- Tuit Button Rendered Under Navigation Links -->
        <button class="btn btn-primary rounded-pill w-100">
            Tuit
        </button>
    `);
}

// export this function which produces static html as a function
export default navigationSidebar;
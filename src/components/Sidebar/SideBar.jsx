import "./sidebar.css"

function SideBar() {
  
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">About Me</span>
                <img src="https://images.pexels.com/photos/2317577/pexels-photo-2317577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Beatae laborum, quas numquam
                suscipit distinctio neque, saepe maxime nisi nobis sunt tempore 
                commodi. Repellat voluptatum maiores dicta ipsam quisquam, dolore
                numquam.</p>
                <div className="sideBarItem">
                    <span className="sideBarTitle">CATEGORIES</span>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">Life</li>
                        <li className="sideBarListItem">Music</li>
                        <li className="sideBarListItem">Sport</li>
                        <li className="sideBarListItem">Style</li>
                        <li className="sideBarListItem">Cinema</li>
                        <li className="sideBarListItem">Tech</li>
                    </ul>
                </div>
                <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
                <a href="https://www.facebook.com/">
                <i className=" sidebarIcon fab fa-facebook-square"></i></a>
                <a href="https://twitter.com"> 
                <i className=" sidebarIcon fab fa-twitter-square"></i></a>
                <a href="https://www.pinterest.com/">
                <i className=" sidebarIcon fab fa-pinterest-square"></i></a>
                <a href="">
                <i className=" sidebarIcon fab fa-instagram-square"></i></a>
                </div>
                </div> 
            </div>
        </div>
    )
}

export default SideBar

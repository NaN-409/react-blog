import "./sidebar.css"

function SideBar() {
  
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">About Me</span>
                {/* <img src="https://st.depositphotos.com/1000940/2821/v/600/depositphotos_28213453-stock-illustration-vector-internet-marketing-concept.jpg" alt="" /> */}
                <p>Raqamli marketing bo'yicha qo'llanma xilma-xil bo'lib, u taniqli asosiy va rivojlangan vositalarni o'z ichiga oladi. Ba'zi raqamli vositalardan oflayn rejimda foydalanish mumkin.</p>
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

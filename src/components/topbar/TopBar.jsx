import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
    const user = false
    return (
        <div className="top">
            <div className="topleft">
            <a href="https://www.facebook.com/">
                <i className=" sidebarIcon fab fa-facebook-square"></i></a>
                <a href="https://twitter.com"> 
                <i className=" sidebarIcon fab fa-twitter-square"></i></a>
                <a href="https://www.pinterest.com/">
                <i className=" sidebarIcon fab fa-pinterest-square"></i></a>
                <a href="https://www.youtube.com/watch?v=tlTdbc5byAs&t=1306s">
                <i className=" sidebarIcon fab fa-instagram-square"></i></a>
            </div>
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/singlepost">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/settings">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "Log Out"}</li>
                </ul>
            </div>
            <div className="topright">
                {
                    user ? (
                        
                <div className="topImg">
                <img src="https://images.pexels.com/photos/5565715/pexels-photo-5565715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                    ): (
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                    )}
                <i className="topSearchIcon fas fa-search"></i>
                
            </div>
        </div>
    )
}

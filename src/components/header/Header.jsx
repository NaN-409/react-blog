import "./header.css"


function Header() {
    return (
        <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/8433042/pexels-photo-8433042.jpeg?auto=compress&cs=tinysrgb&dpr=1&" alt="" />
        </div>
    )
}

export default Header

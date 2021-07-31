import SideBar from "../../components/Sidebar/SideBar"
import "./settings.css"

export default function Settings () {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://images.pexels.com/photos/2806361/pexels-photo-2806361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        alt="" 
                        />
                        <label htmlFor="fileInput">
                        <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Nurbek" />
                    <label>Email</label>
                    <input type="email" placeholder="abduhamidovnurbek888@gmail.com" />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                <SideBar/>
        </div>
    )
}

import SideBar from '../../components/Sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'

function Single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost/>
            <SideBar/>
        </div>
    )
}

export default Single

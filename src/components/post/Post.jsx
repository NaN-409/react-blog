import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            width="100%" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet</span>
                <span className="postDate">1 hour ago</span>
                <div className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Distinctio veniam ipsam totam, aliquam tenetur
                    optio quasi id necessitatibus velit tempore?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Distinctio veniam ipsam totam, aliquam tenetur
                    optio quasi id necessitatibus velit tempore?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Distinctio veniam ipsam totam, aliquam tenetur
                    optio quasi id necessitatibus velit tempore?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Distinctio veniam ipsam totam, aliquam tenetur
                    optio quasi id necessitatibus velit tempore?
                </div>
                <hr />
            </div>
        </div>
    )
}

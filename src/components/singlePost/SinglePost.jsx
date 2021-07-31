import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/631037/pexels-photo-631037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000" alt="" 
                className="singlePostImg" />
                <h1 className="singlePost">
                    Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i className="singlePostIcon fas fa-edit"></i>
                <i className="singlePostIcon fas fa-trash-alt"></i>
            </div>
                </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Nurbek</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus sint natus fuga consequatur repellat eius at
        omnis voluptas labore vel, aspernatur eligendi quas error
        am nemo iusto consequuntur atque quos architecto quis perspiciatis. Fugit 
        distinctio architecto a, pariatur repudiandae sint.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, earum. Velit
        amet labore adipisci eos provident ratione officiis quia ad.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus sint natus fuga consequatur repellat eius at
        omnis voluptas labore vel, aspernatur eligendi quas error
        am nemo iusto consequuntur atque quos architecto quis perspiciatis. Fugit 
        distinctio architecto a, pariatur repudiandae sint.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, earum. Velit
        amet labore adipisci eos provident ratione officiis quia ad.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus sint natus fuga consequatur repellat eius at
        omnis voluptas labore vel, aspernatur eligendi quas error
        am nemo iusto consequuntur atque quos architecto quis perspiciatis. Fugit 
        distinctio architecto a, pariatur repudiandae sint.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, earum. Velit
        amet labore adipisci eos provident ratione officiis quia ad.
                </p>
            </div>
        </div>
    )
}

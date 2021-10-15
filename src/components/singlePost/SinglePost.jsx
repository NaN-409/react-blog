import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {/* <img src="https://review.chinabrands.com/chinabrands/seo/image/20190104/internet%20marketing.png" alt=""  */}
                className="singlePostImg" />
                <h1 className="singlePost">
                Raqamli marketing va elektron biznes
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
            Iste'molchilari World Wide Web imkoniyatlaridan faol foydalanayotgan ko'plab brendlar uchun raqamli marketing strategiyasi butun korporativ strategiyaning asosiy bo'g'ini hisoblanadi. Ushbu integratsiya sarmoyalar rentabelligini oshiradi.

Zamonaviy raqamli texnologiyalardan foydalanish tovar va mijozlar o'rtasidagi o'zaro aloqalarni kengaytiradi va chuqurlashtiradi, bu esa savdo hajmini oshiradi va sodiqlikni oshiradi. Virusli effekt va arzon reklama kanallari reklama xarajatlarini kamaytiradi.    
                </p>
            </div>
        </div>
    )
}

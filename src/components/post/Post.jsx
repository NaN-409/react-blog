import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        // src="https://seodev.by/wp-content/uploads/2020/12/internet-marketing-748x405-1700x956.png"
        width="100%"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Digital</span>
          <span className="postCat">SEO</span>
        </div>
        <span className="postTitle">
          Marketing tushinchasi : Maqsad va vazifalari
        </span>
        <span className="postDate">1 hour ago</span>
        <div className="postDesc">
          Texnologiyalarning faol rivojlanishi tufayli marketingda ko'plab yangi
          yo'nalishlar paydo bo'ladi. Trends tomoshabinlar bilan o'zaro aloqalar
          uchun imkoniyatlar yaratishga qaratilgan. Yangi paydo bo'lgan
          vositalar o'zlarining ahamiyatini yo'qotishi bilanoq tezda paydo
          bo'ladi. Bir necha yil oldin, eng ko'p talab qilinadigan
          internet-marketing edi - uning o'rnini raqamli yoki raqamli marketing
          egalladi. <br/>
          

        </div>
        <hr />
      </div>
    </div>
  );
}

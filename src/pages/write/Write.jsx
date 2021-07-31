import "./write.css"

export default function Write() {
    return (
        <div className="write">
        <img 
        className="writeImg"
        src="https://images.pexels.com/photos/1433473/pexels-photo-1433473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        alt="" />
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus="true" />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </div>
        </div>
    )
}

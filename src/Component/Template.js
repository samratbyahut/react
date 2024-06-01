import { useState } from 'react'

const Template = () => {
    const [show, setShow] = useState(false);
    const [postArr, setPostArr] = useState([]);
    function handleSubmit(event) {
        event.preventDefault()
        const postData = {
            "username": event.target.post.value,
            "post": event.target.username.value
        };
        const postArrCopy = JSON.parse(JSON.stringify(postArr));
        postArrCopy.push(postData);
        setPostArr(postArrCopy);
        setShow(false);
    }
    return (
        <div className='container'>
            <div className="modal" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-content">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className="modal-body">
                            <label >Write your post</label>
                            <textarea name="post"></textarea>
                            <label>Your Name</label>
                            <input type="text" name="username" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => { setShow(false) }}>Cancel</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='inner-container'>
                <div>
                    <span className='heading'>React Poster</span>
                </div>
                <button className='post-btn' onClick={() => { setShow(!show) }}>New Post</button>
            </div>
            <div className='post-container'>
                {
                    postArr?.map((v) => {
                        return (
                            <div className='post-card'>
                                <h5>{v.username}</h5>
                                <p>{v.post}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Template

import Axios from 'axios';
import { useState } from 'react';
import '../Styles/addBlog.css';

const AddBlog = () => {

    const [blogAuthor, setAuthor] = useState('');
    const [blogTitle, setTitle] = useState('');
    const [blogText, setText] = useState('');
    const [succes, setSuccess] = useState(false)

    const handleSumbit = () =>{
        Axios.post('http://localhost:3001/api/post', {
            blogAuthor: blogAuthor,
            blogTitle: blogTitle,
            blogText: blogText,
        }).then(() => {
            setSuccess(true);
        })
    }

    return ( 
        <div className='addBlog'>
            <h2>Add a New Blog</h2>
            <label>Blog Author:</label>
            <input 
            type='text' 
            required 
            maxLength={40}
            value={blogAuthor}
            onChange={(e)=> setAuthor(e.target.value)}
            />
            <label>Blog Title:</label>
            <input
            type='text'
            required
            maxLength={50}
            value={blogTitle}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label>Blog content:</label>
            <textarea
            required
            maxLength={2000}
            value={blogText}
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSumbit}>Add Blog</button>
        </div>
     );
}
 
export default AddBlog;
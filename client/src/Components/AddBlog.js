import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/addBlog.css';

const AddBlog = () => {

    const [blogAuthor, setAuthor] = useState('');
    const [blogTitle, setTitle] = useState('');
    const [blogDescription, setDescription] = useState('');
    const [blogContent, setContent] = useState('');
    const [blogCategory, setCategory] = useState('Tech');
    const [success, setSuccess] = useState(false)

    console.log(blogCategory)

    const handleSumbit = () =>{
        Axios.post('http://localhost:3001/api/post', {
            blogAuthor: blogAuthor,
            blogTitle: blogTitle,
            blogDescription: blogDescription,
            blogContent: blogContent,
            blogCategory: blogCategory,
        }).then(setSuccess(true))
    }

    return ( 
        <div className='addBlog'>
            <form>
                <h2>Add a New Blog</h2>
                <label>Blog Author:</label>
                <input 
                type='text' 
                required 
                maxLength={30}
                value={blogAuthor}
                onChange={(e)=> setAuthor(e.target.value)}
                />
                <label>Blog Title:</label>
                <input
                type='text'
                required
                maxLength={100}
                value={blogTitle}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog description:</label>
                <input
                type='text'
                required
                maxLength={250}
                value={blogDescription}
                onChange={(e)=>setDescription(e.target.value)}
                />
                <label>Blog content:</label>
                <textarea
                required
                maxLength={2500}
                value={blogContent}
                onChange={(e) => setContent(e.target.value)}
                />
                <label>Blog cathegory:</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value='Tech'>Tech</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Travel'>Travel</option>
                    <option value='Lifestyle'>Lifestyle</option>
                    <option value='Other'>Other</option>
                </select>
                <br/><br/>
            </form>
            {!success && <button onClick={handleSumbit}>Add Blog</button>}
            {success && <button disabled>Add Blog</button>}
            {success && <p>Blog successfully added! <Link to='/'>Back to homepage</Link></p>}
        </div>
     );
}
 
export default AddBlog;
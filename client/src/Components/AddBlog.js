import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/addBlog.css';

const AddBlog = () => {

    //States
    const [blogAuthor, setAuthor] = useState('');
    const [blogTitle, setTitle] = useState('');
    const [blogDescription, setDescription] = useState('');
    const [blogContent, setContent] = useState('');
    const [blogCategory, setCategory] = useState('Tech');
    const [success, setSuccess] = useState(false);
    const [empty, setEmpty] = useState(false);

    /*Function that runs on submit of the form.
    If any of the form inputs is empty it will setEmpty to true.
    Else it will send a post request to the server with all the information from the form*/
    const handleSumbit = () =>{
        if(blogAuthor === '' || blogTitle === '' || blogDescription === '' || blogContent === ''){
            setEmpty(true);
        } else(
            Axios.post('http://localhost:3001/api/post', {
                blogAuthor: blogAuthor,
                blogTitle: blogTitle,
                blogDescription: blogDescription,
                blogContent: blogContent,
                blogCategory: blogCategory,
            }).then(setSuccess(true), setEmpty(false))
        )
    }

    return ( 
        <div className='addBlog'>
            <div className='form'>
                <form>
                    <h2>Add a New Blog</h2>
                    <label>Blog Author:</label>
                    <input 
                    type='text' 
                    maxLength={30}
                    value={blogAuthor}
                    onChange={(e)=> setAuthor(e.target.value)}
                    />
                    <label>Blog Title:</label>
                    <input
                    type='text'
                    maxLength={100}
                    value={blogTitle}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <label>Blog description:</label>
                    <input
                    type='text'
                    maxLength={250}
                    value={blogDescription}
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                    <label>Blog content:</label>
                    <textarea
                    maxLength={4000}
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
                
                {/*If the success variable is equal to false the AddBlog button is active. 
                Else display a success massage and disable the button*/}
                {!success && <button onClick={handleSumbit}>Add Blog</button>}
                {success && <button disabled>Add Blog</button>}
                {success && <p>Blog successfully added! <Link to='/'>Back to homepage</Link></p>}

                {empty && <p>Please fill all of the inputs</p>}
            </div>
        </div>
     );
}
 
export default AddBlog;
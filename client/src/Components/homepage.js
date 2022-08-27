import {useEffect, useState} from 'react';
import Axios from 'axios';
import BlogPreview from './BlogPreview';
import '../Styles/homepage.css';

const Homepage = () => {

    const [blogList, setBlogList] = useState([]);
    useEffect(() =>{
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setBlogList(response.data);
        })
    }, [])

    const handleCategoryChange = (category) => {
        const blogCategory = category;
        Axios.get(`http://localhost:3001/api/getByCategory/${blogCategory}`).then((response) => {
            setBlogList(response.data);
            console.log(blogList);
        })}
    
    return ( 
        <div className='homepage'>
            <div className='title'>
                <h1>Welcome to MyBlogs.com</h1>
                <p>A place where you can create your own blog and read blogs about various topics!</p>
            </div>
            <div className='categories'>
                <select name='categories' onChange={(e)=>handleCategoryChange(e.target.value)}>
                    <option value='*'>- All Categories -</option>
                    <option value='Tech'>Tech</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Travel'>Travel</option>
                    <option value='Lifestyle'>Lifestyle</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
            <div className='blogs'>
            {blogList.map((blog, key) =>{
                return <BlogPreview key={key} blogId={blog.id} blogAuthor={blog.blogAuthor} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogCategory={blog.blogCategory}/>
            })}
            </div>
        </div>
     );
}
 
export default Homepage;
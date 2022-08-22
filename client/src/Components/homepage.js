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
    })
    return ( 
        <div className='homepage'>
            <div className='title'>
                <h1>Welcome to *pagename*</h1>
                <p>A place where you can create your own blog and read blogs about various topics!</p>
            </div>
            <div className='blogs'>
            {blogList.map((blog, key) =>{
                return <BlogPreview key={key} blogAuthor={blog.blogAuthor} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogCategory={blog.blogCategory}/>
            })}
            </div>
        </div>
     );
}
 
export default Homepage;
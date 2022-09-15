import {useEffect, useState} from 'react';
import Axios from 'axios';
import BlogPreview from './BlogPreview';
import '../Styles/homepage.css';

const Homepage = () => {

    const [blogList, setBlogList] = useState([]);
    //On load of the page it sends a get request to the server and set a list of blogs equal to the response
    useEffect(() =>{
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setBlogList(response.data);
        })
    }, [])

    //On change of the select element it sents a get request to the server and display the blogs based on chosen category
    const handleCategoryChange = (category) => {
        const blogCategory = category;
        Axios.get(`http://localhost:3001/api/getByCategory/${blogCategory}`).then((response) => {
            setBlogList(response.data);
            console.log(blogList);
        })}
    
    return ( 
        <div className='homepage'>
            <div className='title'>
                <h1>Welcome to MyBlogs</h1>
                <p>A place where you can create your own blog and read blogs written by other users!</p>
            </div>
            <div className='categories'>
                {/*Select element which runs a "handleCategoryChange" function on its change*/}
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
            {/*Mapping through all the blogs and returning a BlogPreview component for each blog*/}
            {blogList.map((blog, key) =>{
                return <BlogPreview key={key} blogId={blog.id} blogAuthor={blog.blogAuthor} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} blogCategory={blog.blogCategory}/>
            })}
            </div>
        </div>
     );
}
 
export default Homepage;
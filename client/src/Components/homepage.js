import {useEffect, useState} from 'react';
import Axios from 'axios';
import Blog from './Blog';
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
                return <Blog key={key} blogAuthor={blog.blogAuthor} blogTitle={blog.blogTitle} blogText={blog.blogText}/>
            })}
            </div>
        </div>
     );
}
 
export default Homepage;
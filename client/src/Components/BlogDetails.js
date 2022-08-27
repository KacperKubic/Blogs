import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/blogDetails.css';

const BlogDetails = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/blogDetails/${id}`).then((response) => {
            setBlogDetails(response.data)
        })
    }, [id]);

    return ( 
        <div className='blogDetails'>
            <article>
                {blogDetails.map(blog => 
                    <div className='blog' key={blog}>
                        <h1>{blog.blogTitle}</h1>
                        <p>Written by: <span>{blog.blogAuthor}</span> Category: <span>{blog.blogCategory}</span></p>
                        <div>{blog.blogContent}</div>
                    </div>)}
            </article>
        </div>
     );
}
 
export default BlogDetails;
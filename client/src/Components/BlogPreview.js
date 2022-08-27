import {Link} from 'react-router-dom';

const BlogPreview = ({blogId, blogAuthor, blogCategory, blogTitle, blogDescription}) => {
    return ( 
        <div className='blog'>
            <p className='blogInfo'>Written by: <span>{blogAuthor}</span> Category: <span>{blogCategory}</span></p>
            <h2>{blogTitle}</h2>
            <p className='blogDescription'>{blogDescription}</p>
            <button><Link to={`/blog/${blogId}`}>Read more</Link></button>
        </div>
     );
}
 
export default BlogPreview;
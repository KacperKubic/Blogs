const Blog = ({blogAuthor, blogTitle, blogText}) => {
    return ( 
        <div className='blog'>
            <p className='blogInfo'>Written by: <span>{blogAuthor}</span></p>
            <h2>{blogTitle}</h2>
            <p className='blogText'>{blogText}</p>
            <button>Read more</button>
        </div>
     );
}
 
export default Blog;
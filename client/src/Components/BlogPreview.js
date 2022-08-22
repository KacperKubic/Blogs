const BlogPreview = ({blogAuthor, blogCategory, blogTitle, blogDescription}) => {
    return ( 
        <div className='blog'>
            <p className='blogInfo'>Written by: <span>{blogAuthor}</span> Category: <span>{blogCategory}</span></p>
            <h2>{blogTitle}</h2>
            <p className='blogDescription'>{blogDescription}</p>
            <button>Read more</button>
        </div>
     );
}
 
export default BlogPreview;
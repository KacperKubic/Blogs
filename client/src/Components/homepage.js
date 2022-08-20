import '../Styles/homepage.css';

const Homepage = () => {
    return ( 
        <div className='homepage'>
            <div className='title'>
                <h1>Welcome to *pagename*</h1>
                <p>A place where you can create your own blog and read blogs about various topics!</p>
            </div>
            <div className='blogs'>
                <div className='blog'>
                    <p className='blogInfo'> Written by: <text>Kacper</text> Category: <text>Tech</text></p>
                    <h2>First blog</h2>
                    <p className='blogText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam explicabo officia quas tenetur veniam id? Odit veritatis quo culpa ullam beatae quas, sequi exercitationem eos molestias, consequatur rem sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam explicabo officia quas tenetur veniam id? Odit veritatis quo culpa ullam beatae quas, sequi exercitationem eos molestias, consequatur rem sapiente.</p>
                    <button>Read more</button>
                </div>
                <div className='blog'>
                    <p className='blogInfo'> Written by: <text>Kacper</text> Category: <text>Tech</text></p>
                    <h2>First blog</h2>
                    <p className='blogText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam explicabo officia quas tenetur veniam id? Odit veritatis quo culpa ullam beatae quas, sequi exercitationem eos molestias, consequatur rem sapiente.</p>
                    <button>Read more</button>
                </div>
                <div className='blog'>
                    <p className='blogInfo'> Written by: <text>Kacper</text> Category: <text>Tech</text></p>
                    <h2>First blog</h2>
                    <p className='blogText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam explicabo officia quas tenetur veniam id? Odit veritatis quo culpa ullam beatae quas, sequi exercitationem eos molestias, consequatur rem sapiente.</p>
                    <button>Read more</button>
                </div>
                <div className='blog'>
                    <p className='blogInfo'> Written by: <text>Kacper</text> Category: <text>Tech</text></p>
                    <h2>First blog</h2>
                    <p className='blogText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam explicabo officia quas tenetur veniam id? Odit veritatis quo culpa ullam beatae quas, sequi exercitationem eos molestias, consequatur rem sapiente.</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;
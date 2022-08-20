import {Link} from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>Homepage</Link>
                <Link to='/addblog'>Add Blog</Link>
            </div>
            <div className='categories'>
                <select name='categories' id='categories'>
                    <option value='allCategories'>- All Categories -</option>
                    <option value='tech'>Tech</option>
                    <option value='lifestyle'>Lifestyle</option>
                    <option value='cooking'>Cooking</option>
                </select>
            </div>
        </nav>
     );
}
 
export default Navbar;

import {Link} from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>Homepage</Link>
                <Link to='/add'>Add Blog</Link>
            </div>
            <div className='categories'>
                <select name='categories' id='categories'>
                    <option value='allCategories'>- All Categories -</option>
                    <option value='Tech'>Tech</option>
                    <option value='Cooking'>Cooking</option>
                    <option value='Travel'>Travel</option>
                    <option value='Lifestyle'>Lifestyle</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
        </nav>
     );
}
 
export default Navbar;

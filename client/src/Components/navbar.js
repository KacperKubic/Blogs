import {Link} from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>Homepage</Link>
                <Link to='/add'>Add Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
}

export default NavBar;
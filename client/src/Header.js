import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/" className='logo'>Indigeneous Tongues</Link>
            <nav>
                <Link to="">Explore Languages</Link>
                <Link to='/createpost'>CreatePost</Link>
                <Link to="">About Us</Link>
                <Link to="/login">Login</Link>
                <Link to="">Register</Link>

            </nav>
        </header>

    )
}
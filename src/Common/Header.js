import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="header-base">
                <ul className="header-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><a>Signup</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
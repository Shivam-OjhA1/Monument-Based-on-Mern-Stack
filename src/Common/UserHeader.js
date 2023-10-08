import './Header.css';
import { Link } from 'react-router-dom';


const UserHeader = () => {
    function logout(){
        localStorage.clear();
    }

    return (
        <div>
            <input type='checkbox' id='n1' />
            <div className="header-base">
                <ul className="header-menu">
                    <li><Link to="/userhome">Home</Link></li>
                    <li><label for="n1" className='mt'>Monuments</label></li>
                    <li><Link to="/" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
            <div className='header-monument'>
                <div><Link to="/khajuraho">Khajuraho Group, Chhatarpur</Link></div>
                <div><Link to="/tajmahal">Taj Mahal, Agra</Link></div>
                <div><Link to="/hawamahal">Hawa Mahal, Jaipur</Link></div>
                <div><Link to="/indiagate">India Gate, New Delhi</Link></div>
                <div><Link to="/amerfort">Amer Fort, Jaipur</Link></div>
                <div><Link to="/gateway">Gateway of India, Mumbai</Link></div>
                <div><Link to="/jaisalmer">Jaisalmer Fort, Jaisalmer</Link></div>
                <div><Link to="/charminar">Charminar, Hyderabad</Link></div>
                <div><Link to="/qutubminar">Qutub Minar, Delhi</Link></div>
                <div><Link to="/redfort">Red Fort, Delhi</Link></div>
            </div>
        </div>
    );
}

export default UserHeader;

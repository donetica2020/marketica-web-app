import './navbar.css';
import image from './assets/marketica-logo.png'
import { Link } from 'react-router-dom';
export default function NavBar({current_route}) {

    return (
        <div className="NavBar">
            <a target="_blank" rel="noopener noreferrer" href='https://www.marketica.com' className="logoSection">
                <img src={image} alt='marketica-logo' id='logoimage'   />
                <h2>Marketica</h2>
            </a>
            <div className="linkSection">
                <Link className={current_route == 'home' ? 'selected' : 'not-selected'} to='/'>Home</Link>
                <Link className={current_route == 'about' ? 'selected' : 'not-selected'} to='/about'>About Us</Link>
                <Link className={current_route == 'donate' ? 'selected' : 'not-selected'} to='/donate'>Donate Us</Link>
                <Link className={current_route == 'contact' ? 'selected' : 'not-selected'} to='/contact'>Contact Us</Link>
            </div>
        </div>
    )
}

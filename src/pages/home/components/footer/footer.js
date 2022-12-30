import './footer.css'
import image from '../../assets/Logo.png';
import email from '../../assets/envelope.png';
import phone from '../../assets/phone-call.png'

import fb from '../../assets/facebook-app-symbol.png';
import twitter from '../../assets/twitter.png';
import linkdn from '../../assets/linkedin.png';

import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-top'>
                <img src={image} alt='Marketica' id='footer-logo' />
                <div className='contact-buttons'>
                 <a href="mailto:info@marketica.com" target="_blank" rel="noopener noreferrer" className='link'>
                        <img src={email} alt='Email' className='link-icon' />
                        <p>info@marketica.com</p>
                    </a>
                 <a href="https://api.whatsapp.com/send?phone=41762372731" target="_blank" rel="noopener noreferrer"  className='link'>
                        <img src={phone} alt='Email' className='link-icon' />
                        <p>+41 76 237 27 31</p>
                    </a>
                    <div className='icon-container'>
                     <a className='small-container' target="_blank" rel="noopener noreferrer"><img src={twitter} alt={fb} className='small-icon' /></a>
                     <a className='small-container' target="_blank" rel="noopener noreferrer"><img src={fb} alt={fb} className='small-icon' /></a>
                     <a className='small-container' target="_blank" rel="noopener noreferrer"><img src={linkdn} alt={fb} className='small-icon' /></a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='button-container'>
                    <Link className='nav-button' to='/'>Home</Link>
                    <Link className='nav-button' to='/about'>About Us</Link>
                    <Link className='nav-button' to='/donate'>Donate Us</Link>
                    <Link className='nav-button' to='/contact'>Contact Us</Link>
                </div>
                <div className='line-border'>

                </div>
            </div>
            <div className='bottom'>
                <p>Marketica by Donetica.com</p>
            </div>
        </div>
    )
}
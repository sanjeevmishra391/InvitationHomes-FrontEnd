import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import './footer-style.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <ul className='footer-menu'>
                    <li className='menu-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/property'>Properties</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div>
                    <Link className='logo-container' to="/">
                        <span>InvitationHomes</span>
                    </Link>
                </div>
                <ul className='social-icons'>
                    <li className='social'>
                        <a href='/'>
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className='social'>
                        <a href='/'>
                            <InstagramIcon />
                        </a>
                    </li>
                    <li className='social'>
                        <a href='/'>
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li className='social'>
                        <a href='/'>
                            <TwitterIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
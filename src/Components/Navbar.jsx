import React from 'react'
import '../Styles/Navbar.css'
// import { FaInstagram, FaSnapchatGhost, FaFacebookF } from "react-icons/fa";
// import "../Styles/SocialLinks.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">abdullah_awlia</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#quotes">Quotes</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#footer">Contact</a></li>

            </ul>
            {/* <div className="social-links">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />
                </a>
                <a href="https://www.snapchat.com/add/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaSnapchatGhost className="icon snapchat" />
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="icon facebook" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                </a>
            </div> */}
            <button className='nav-btn'>Learn more</button>
        </nav>
    )
}

export default Navbar
import { FaInstagram, FaYoutube, FaFacebookF, FaEnvelope } from "react-icons/fa";
import "../Styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                {/* Brand */}
                <div className="footer__brand">
                    <img src="systems_project/src/assets/quotes/laptop-apple-macbook-computer.jpg" alt="" />
                </div>
                {/* Links */}
                <div className="footer__col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#blogs">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="footer__col">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#stack">Tech Stack</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer__social">
                    <h4>Follow</h4>
                    <div className="social__row">
                        <a href="https://instagram.com/yourusername" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com/@yourchannel" aria-label="YouTube" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://facebook.com/yourusername" aria-label="Facebook" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="footer__divider" />

            {/* Bottom bar with email */}
            <div className="footer__bottom">
                <span>© {new Date().getFullYear()} abdullah_awlia. All rights reserved.</span>
                <a href="mailto:youremail@example.com" className="footer__email">
                    <FaEnvelope /> youremail@example.com
                </a>
            </div>
        </footer>
    );
}

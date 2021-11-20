import React from "react";
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";


function Footer() {
    return(
        <footer>
            <div className = "socMedia">
                <span><a href = "https://www.github.com/"><FaGithub /></a></span>
                <span><a href = "https://www.linkedin.com/"><FaLinkedinIn /></a></span>
                <span><a href = "https://www.twitter.com/"><FaTwitter /></a></span>
                <span><a href = "https://www.discord.com/"><FaDiscord /></a></span>
            </div>
            <p className="copyright">Copyright &copy; {new Date().getFullYear()} by I Know, Right(s)!</p>
        </footer>
    )
};

export default Footer;
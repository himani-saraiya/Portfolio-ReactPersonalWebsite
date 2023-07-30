import "./FooterStyle.css";

import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Sulgaon,dist.Dewas.</p>
                            <p>MadhyaPradesh.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                            9770373838
                        </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                            himanisaraiya@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About of social media</h4>
                    <p>LinkedIn: Check out my professional journey and skills in software <br></br>development and Explore my innovative coding projects and contributions</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/https://www.linkedin.com/in/himani-saraiya-b74953233/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30}
                                style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                        <a href="https://www.github.com/https://github.com/himani-saraiya?page=1&tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}
                                style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
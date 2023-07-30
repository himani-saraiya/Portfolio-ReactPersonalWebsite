import "./HeroImgStyle.css";
import React from 'react';
import IntroImg from "../assests/p7.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${IntroImg})` }}>
      <div className="mask">
      </div>
      <div className="content">
        <p className="intro-text">HI, I am a Frontend Developer,</p>
        <h1>React Developer.</h1>
        <div className="buttons">
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn">Contact</Link>
          <Link to="/about" className="btn">About</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;

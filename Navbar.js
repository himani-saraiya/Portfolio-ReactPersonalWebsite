import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const[click,setClick]=useState(false)
  const handleClick=()=> setClick(!click)
  const [color,setColor]=useState();
  const changeColor=()=>{
    if(window.scrollY>=100){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? ".nav-menu li :active":"nav-menu" }>
        <li className='.nav-menu li'>
          <Link to="/">Home</Link>
        </li>
        <li className='.nav-menu li' style={{color:"red"}}>
          <Link to="/about">About</Link>
        </li>
        <li className='.nav-menu li' style={{color:"blue"}}>
          <Link to="/project">Projects</Link>
        </li>
        <li className='.nav-menu li' style={{color:"white"}}>
          <Link to="/contect">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
      </div>
    </div>
  );
};

export default Navbar;

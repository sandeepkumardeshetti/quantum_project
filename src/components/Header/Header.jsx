
import {  useRef, useState } from 'react'
import { NavLink } from "react-router-dom"
// import withRouter from '../withRouter'
import {FaTimes, FaBars} from 'react-icons/fa'
import quantumLogo from '../../images/quantumLogo.png'
import './header.css'
import { SubMenu } from '../SubMenu/SubMenu'
import quantumLogoNav from '../../images/Quantum_Logo-removebg-preview.png'


const Header = () => {
  const navRef = useRef(null)
  const [showAboutMenu, setShowAboutMenu] = useState(false)

const showNavbar = (e) => {

  navRef.current.classList.toggle("responsive_nav")
}
const handleHover = () => {
  setShowAboutMenu(true)

};

const handleLeave = () => {
 setShowAboutMenu(false)
};

  return (
    <header className='header' >
      <img className='quantum-logo' src={quantumLogo} />
      <nav ref={navRef}> 
      <ul>
        <li   onClick={showNavbar} ><NavLink to="/" >Home</NavLink></li>
        <li  onClick={showNavbar} ><NavLink to="/about" >About Us </NavLink>
        </li>
        <li  onClick={showNavbar} onMouseLeave={handleLeave} >
        <NavLink to="/products" onMouseEnter={handleHover} >Products &#8628;
        </NavLink>
        { showAboutMenu && <SubMenu />}</li>
        <li  onClick={showNavbar} ><NavLink to="/services" > Services </NavLink></li>
        <li  onClick={showNavbar} ><NavLink to="/contact" >Contact Us </NavLink></li>
        <img className='quantum-logo-nav' src={quantumLogoNav} />
        <button className='nav-btn nav-close-btn' onClick={showNavbar} >
        <FaTimes color='#29335c' size="25px" />
        </button> 
        </ul>
      </nav>
       <button className='nav-btn nav-menu-btn' onClick={showNavbar} >
        <FaBars color='#29335c' size="25px" />
      </button>  

       </header>
  )
}

export default Header
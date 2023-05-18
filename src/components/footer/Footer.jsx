import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import quantumLogo from '../../images/quantumLogo.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer' >
        <div className='logo-text' >
        <img className='quantum-logo' src={quantumLogo} />
            <p>From early 2013 holding experience more than 10 years in the road safety industry. Known for the best customer satisfaction and responsiveness, company always held its position and respect high in the customer point of view.</p>
        </div>
        <div className='footer-links-con' >
            <h2>Quick Links</h2>
            <Link to="/" >
            <p>Home</p>
            </Link>

           <Link  to="/about">
              <p>About Us</p>
           </Link>
            <Link to="/products" >
            <p>Products</p>
            </Link>
            <Link to="/services" >
            <p>Services</p>
            </Link>
           <Link to="/contact" >
           <p>Contact Us</p>
           </Link>
            

        </div>
        <div className='footer-links-con ' >
            <h2>Socials</h2>
            <div className='social-links' >
            <FaFacebookSquare color='#29335c' size={30} />
            <FiInstagram color='#29335c' size={30} />
            <AiOutlineLinkedin color='#29335c' size={30} />
            </div>
            
            
        </div>

    </footer>
  )
}

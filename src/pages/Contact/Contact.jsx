import { heroContactData } from '../../constants/data'
import  Hero from '../../components/hero/Hero'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {RiMapPin2Fill} from 'react-icons/ri'
import { Footer } from '../../components/footer/Footer'
import { motion } from 'framer-motion'

import './contact.css'

const Contact = () => {

 const onSubmitForm = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
 
 }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    
    >
    <Hero heroData={heroContactData} />
    <div className='contact-cards' >
        <div className='contact-card' >
            <BsFillTelephoneFill color='#29335c' size={45} />
            <h2 className='contact-card-heading' >Give Us A Call</h2>
            <p>+91 9121300101<br/>+91 8985843969<br/>+91 9652166662</p>
        </div>
        <div className='contact-card' >
            <GrMail color='#29335c' size={45} />
            <h2 className='contact-card-heading'><a className='mail-title' href='mailto:sales@quantumindustries.in' >Send Us An Email</a></h2>
            <p>sales@quantumindustries.in</p>
        </div>
        <div  className='contact-card' >
            <a  href='#map-section' ><RiMapPin2Fill color='#29335c' size={45} /></a>
            <h2 className='contact-card-heading'>Come Visit Us!</h2>
            <p>Plot No.26, Surabhi Enclave, Phase - 1, Kowkoor, Alwal, Secunderabad, Telangana, INDIA - 500010</p>
        </div>
    </div>
    <iframe id='map-section' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15218.36097827363!2d78.5381503!3d17.527063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85b050e93f5d%3A0xd618876166bfca2c!2sThermoplastic%20Road%20Marking%20Paint%20Manufacturers-QUANTUM%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1683614986746!5m2!1sen!2sin" width="100%" height="450" style={{border : 0}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className="contact-form-container">  
  <form id="contact" onSubmit={onSubmitForm}>
    <h3>Get in touch with us</h3>
    <h4>We work for you</h4>
    <fieldset>
      <input  placeholder="Your name" type="text" tabIndex="1" required  />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number " type="tel" tabIndex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>
    <Footer />
</motion.div>
  )
}


export default Contact
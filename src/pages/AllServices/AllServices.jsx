import React from 'react'
// import Hero  from '../../components/hero/Hero'
// import { heroServicesData } from '../../constants/data'
import { motion } from 'framer-motion'
import roadImage from '../../images/asphalt-road-forest.jpg'
import waveSvg from '../../images/wave-haikei.svg'
import './allServices.css'
import workerImage from '../../images/undraw_qa_engineers_dg-5-p.svg'
import {FaQuoteLeft} from 'react-icons/fa'
import quantumLogo from '../../images/Quantum_Logo-removebg-preview.png'


const AllServices = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      {/* <Hero heroData={heroServicesData} /> */}


  <figure className="intro">
  <img className='road-image-bg-services' src={roadImage} alt="road image Background" />
  <figcaption className="caption">
    
    <h1>Our Services</h1>
  </figcaption>
  <span className="overlay">



<img className='wave-svg' src={waveSvg}  />

  </span>
</figure>
<article className="copy">
  <p className="teaser">Diversified Service, Unvarying Quality.</p>
  <div style={{textAlign:"center"}} >
  <FaQuoteLeft color="#0066ff" size={55}  />
  </div>
 
  <p>Our salespeople, all have hands-on, in house production experience and field application knowledge. You can be assured of expert guidance and support in choosing which product is best for your applications. Combined with an expert staff of engineers, factory trained representatives, customer service team; Quantum Industries offers you extreme performance.</p>
  <div className='s-button-con' >
  <button  >Contact Us</button>
  </div>
  
</article>
<div className='worker-image-container' >
  <img className='wave-img' src={waveSvg} alt='wave svg' />
  <div  className='image-text'>
  <img className='worker-image' src={workerImage} alt='worker Image' />
  <div>
  <h2 className='worker-image-heading' >Diversified Service, Unvarying Quality.</h2>
  <p className='worker-image-description' >Our salespeople, all have hands-on, in house production experience and field application knowledge. You can be assured of expert guidance and support in choosing which product is best for your applications</p>
  </div>
 
  </div>
  
 
</div>
    </motion.div>
  )
}

export default AllServices

import React from 'react'
import { Link } from 'react-router-dom'
import Hero  from '../../components/hero/Hero'
import { heroProductsData } from '../../constants/data'
import { motion } from 'framer-motion'
import './products.css'
// import { ProductWithTable } from '../../components/ProductWithTable/ProductWithTable'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import roadImage from '../../images/asphalt-road-forest.jpg'

import {retroProductsData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'
import { BeadsCard } from '../../components/BeadsCard/BeadsCard'

const Products = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Hero heroData={heroProductsData} />
      <div className='quantum-products' >
        <h2>
        QUANTUM PRODUCTS
        </h2>
        <p className='quantum-products-deatils' >
        Quantum Industries focuses on developing the road marking products in compliance with the International Standards fulfilling environmental requirements. Quantum Industries, an ISO 9001:2015 certified company commits to deliver high quality and trade assurance.
        Heat applied Thermoplastic traffic paints contain a mixture of binder, pigments, glass beads for reflectivity, additional fillers and additives for enhancing other vital properties.
        Our products have the most efficient and most reliable features passing MoRTH, BS and other International standards ensuring the markings laid are of high visibility with lower maintenance

        </p>
        {/* thermo Plastic Products */}
        <div className='thermoplastic-products' >
        <svg className='animated-svg' viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            ThermoPlastic
          </text>
          
      </svg> 
      <h2 className='road-marking-heading' >Road Marking Products</h2>
      <ul className="wrap">
        {retroProductsData.map(product => <ProductsCard key={product.id} data={product} /> )}
      </ul>
        </div>

        {/* Drop On Glassbeads Products */}
        <div className='thermoplastic-products' >
        <svg className='animated-svg' viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
           DROP ON
          </text>
          
      </svg> 
      <h2 className='road-marking-heading' >GLASSBEADS</h2>
      
      {/* Glass Beads Product code */}
      

      <BeadsCard />

        </div>

      {/* Retro Primer */}
      <div className='thermoplastic-products' >
        <svg className='animated-svg' viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
           RETRO
          </text>
          
      </svg> 
      <h2 className='road-marking-heading' >PRIMER</h2>

      <div className='primer-content-con' >
        <div className="image-text-con">
          <img src={roadImage} alt='Road Image' />
          <h2>Retro Primer (Thermoplastic Road Concrete Primer)<br/><span>Quantum Industries</span></h2>
        </div> 
        <p >As a leading manufacturer of Retro Primer, a thermoplastic road concrete primer, we specialize in providing high-quality solutions to meet the demands of modern road safety standards. Our Retro Primer is designed to be used as a primer for concrete surfaces, preparing them for the application of thermoplastic road marking paint.</p>
        <p>The Retro Primer helps to increase the adhesion between the concrete surface and the thermoplastic paint, ensuring that the markings remain durable and long-lasting. Our Retro Primer is formulated to be easy to apply and provides a reliable and consistent base for the thermoplastic road marking paint.</p>
        <div className='retro-image-group' >
        <img src={roadImage} alt='Road Image' />
        <img src={roadImage} alt='Road Image' />
        <img src={roadImage} alt='Road Image' />
        <Link to="/GlassBeads"><button>Know More</button></Link>
        </div>

      </div>
      </div>

        
        </div> 
        <Footer />
    </motion.div>
  )
}


export default Products

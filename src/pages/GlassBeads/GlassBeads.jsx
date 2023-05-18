import React from 'react'
import { motion } from 'framer-motion'
import './glassBeads.css'
import { Link } from 'react-router-dom'

import retroBeads from '../../images/retro_beads.png'
import glassBeadsDiagram from '../../images/glass_beads_diagram.png'
import roadImage from '../../images/asphalt-road-forest.jpg'
import diagram from '../../images/diagram.svg'

import {Footer} from '../../components/footer/Footer'

const GlassBeads = () => {
  return (
     <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='retro-mark-products glass-beads' 
    >  
        <div className='thermoplastic-products' >
        <svg className='animated-svg' viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            DROP ON
          </text>
          
      </svg> 
      <h2 className='road-marking-heading' >Glass Beads</h2>
      <img className='beads-image' src={retroBeads} alt="beadsimage" />
      <div className='drop-range-container' >
            <h2>Our Drop on Glass Beads Range</h2>
            <div className='beads-btn-group' >
                <button>POTTERS</button>
                <button>SOVITEC</button>
                <button>RETRO BEADS</button>
            </div>
            
        </div>
        <div className='beads-des-container' >
        <h2>Retro-Reflectorization</h2>
      <p className='beads-description' >
      Pavement Marking Retro-Reflectorization is accomplished through the use of glass beads partially embedded on the surface of the pavement marking material. <br/>
        Most retro-reflective paints and other pavement marking materials contain thousands of glass beads per square foot that are bonded to the highway with a strong binder being Thermoplastic Road Marking Paint. 
        <br />
        Instead of scattering light, as normal paints do, retro-reflective paints containing glass beads that turn the light around and send it back in the direction of your headlights to the driver to significantly improve marking visibility in low light situations. 

      </p>
      </div>
      <img className='beads-diagram' src={diagram} />
      <div className='beads-des-container' >
        <h2> Refractive Index</h2>
      <p className='beads-description' >
      The bead’s Refractive Index (RI) is an important physical parameter The RI is a function of the chemical makeup of the beads. The higher the RI, the more light is retro-reflected. Beads used in traffic paint commonly have a RI of 1.5. There are some 1.65 RI beads used with thermoplastics, and 1.9 RI beads are often used in retro-reflective airport markings.
        <br />
        Despite the increased brightness gained with the higher refractive index, most state and local highway agencies find it is more cost-effective to use 1.5 RI beads.
        The microspheres not only multiply the visibility of the markings at night, but also increase the markings durability in general. Road marking reflective glass beads are used as a drop agent and as premix beads for road marking materials.
        <br/>
        Standing Top in the world for production of Dropon Glassbeads, POTTERS and SOVITEC offers best quality retro reflectorized glass beads that offer best reflection with strong adhere long life.
        RetroMark and RetroMark Pro withheld with these glassbeads results very high brightness and reflection.
        <br/>
        Applying RETRO BEADS is one of the most cost-effective ways to increase retro reflectivity amongst. RETRO BEADS complying to BS 6088 Type B are white, transparent and reach a high percentage of roundness. RETRO BEADS truly spheres optimize retro reflectivity.

      </p>
      </div>
     
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
          <h2>Retro Primer --Thermoplastic Road Concrete Primer<br/><span>Quantum Industries</span></h2>
        </div>
        <p>Hot applied solid thermoplastic traffic paints require a fast dry liquid sprayon primer to help in bonding, adhesion to concrete and other substrates. This fast dry Retro PRIMER solvent based is a good choice. This formulation does contains high levels of hydrocarbon solvents that are considered VOC responsible for high adhesion on concrete surfaces.</p>
        <p>Once the primer is applied and dry, thermoplastic solid heat-applied traffic paints of any kind spray, extrude, screed can be applied over it. The primer forms a good strong deep penetrating base coat to help the top applied thermoplastic bond-adhere better to the substrate. It also forms a water barrier to protect and prolong the life of the solid thermoplastic traffic paint that is applied as a top coat.</p>
        <div className='retro-image-group' >
        <img src={roadImage} alt='Road Image' />
        <img src={roadImage} alt='Road Image' />
        <img src={roadImage} alt='Road Image' />
        <Link to="/contact"><button>Contact Us</button></Link>
        
        </div>
      </div>
      </div>
        <Footer />
    </motion.div>
  )
}


export default GlassBeads
import React from 'react'
import { Link } from 'react-router-dom'
import './beadsCard.css'
// import retroMark from '../../images/retro-mark.png'
import retroBeads from '../../images/retro_beads.png'


export const BeadsCard = () => {
  return (
    <>
     <div className="beads-wrapper">
    <div className="product-img">
      <img src={retroBeads} height="420" width="327"/>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>DROP ON GLASSBEADS</h1>
        <h2>by quantum Industries</h2>
        <p>Pavement Marking Retro-Reflectorization is accomplished through the use of glass beads partially embedded on the surface of the pavement marking material.
        
        </p>
      </div>
      <div className="product-price-btn">
        {/* <p><span>78</span>$</p> */}
        <Link to="/glassBeads" ><button type="button">Know More</button></Link>
      </div>
    </div>
  </div>
     </>
        
    
 
  )
}


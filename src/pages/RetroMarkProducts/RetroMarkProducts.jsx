import React from 'react'
// import { Hero } from '../../components/AllComponents'
// import { heroRetroMarkData } from '../../constants/data'
import { motion } from 'framer-motion'
import './retroMarkProducts.css'


import ProductsCard from '../../components/ProductsCard/ProductsCard'

import {retroProductsData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'

const RetroMarkProducts = () => {
  return (
     <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='retro-mark-products' 
    >  
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
        <Footer />
    </motion.div>
  )
}


export default RetroMarkProducts
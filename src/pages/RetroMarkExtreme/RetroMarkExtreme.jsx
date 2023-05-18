import React from 'react'
import {ProductWithTable} from '../../components/ProductWithTable/ProductWithTable'
import {retroProductsFullData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'


 const RetroMarkExtreme = () => {
  return (
    <div>
        <ProductWithTable data={retroProductsFullData[2]} />
        <Footer />
    </div>
  )
}

export default RetroMarkExtreme

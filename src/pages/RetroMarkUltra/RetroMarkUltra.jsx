import React from 'react'
import {ProductWithTable} from '../../components/ProductWithTable/ProductWithTable'
import {retroProductsFullData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'


 const RetroMarkUltra = () => {
  return (
    <div>
        <ProductWithTable data={retroProductsFullData[3]} />
        <Footer />
    </div>
  )
}

export default RetroMarkUltra

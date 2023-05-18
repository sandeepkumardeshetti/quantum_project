import React from 'react'
import {ProductWithTable} from '../../components/ProductWithTable/ProductWithTable'
import {retroProductsFullData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'


 const RetroMark = () => {
  return (
    <div>
        <ProductWithTable data={retroProductsFullData[0]} />
        <Footer />
    </div>
  )
}

export default RetroMark

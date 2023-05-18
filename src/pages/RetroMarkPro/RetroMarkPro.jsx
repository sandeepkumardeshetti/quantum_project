import React from 'react'
import {ProductWithTable} from '../../components/ProductWithTable/ProductWithTable'
import {retroProductsFullData} from '../../constants/data'
import {Footer} from '../../components/footer/Footer'


 const RetroMarkPro = () => {
  return (
    <div>
        <ProductWithTable data={retroProductsFullData[1]} />
        <Footer />
    </div>
  )
}

export default RetroMarkPro

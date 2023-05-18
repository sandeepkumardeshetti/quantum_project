import './productWithTable.css'


import retroMarkPro from '../../images/retro-mark-pro.png'
import { Link } from 'react-router-dom'




export const ProductWithTable = (props) => {
    const {data} = props
    const {productName, image,table, description, keyFeatures} = data
  return (
    <div className='product-table-container' >
        <div className="wrapper six">
        <div>
            <h3 className="flicker">{productName}</h3>
        </div>
        </div>
        {/* <h2 className='product-heading' >{productName}</h2> */}
        <div className='table-images-con' >
        <img className='retro-mark-pro-img' src={image} /> 
            <img className='table-image' src={table} />
            
        </div>
        <p>{description}</p>

        <div className='key-features-container' >
            <h2>Key Features</h2>
            <div className='features-btn-group' >
            {
                keyFeatures.map(feature =>  <button key={feature}>{feature}</button>)
            }
            </div>
            
        </div>

        
        <div className='wrapper' >
            <h3 className="flicker">*Color could be customized to client requirement for bulk quantities</h3>
        </div>
        <div className='products-btn-con'>
            <Link to="/retroMarkProducts" >
            <button className="custom-btn btn-3"><span>see More Products</span></button>
            </Link>
        
        </div>
        
        

    </div>
  )
}

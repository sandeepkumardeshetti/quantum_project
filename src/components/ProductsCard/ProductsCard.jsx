import React from 'react'

import './productsCard.css'
import { Link } from 'react-router-dom'

                                                                                      

const ProductsCard = (props) => {
    const {data} = props
    const {id, image, productName,colors,description, button} = data
    let link = ''
     switch (id) {
      case "RETROMARK":
        link ="/retroMark"
        break;

        case "RETROPRO":
          link ="/retroMarkPro"
          break;
        
        case "RETROULTRA":
        link ="/retroMarkUltra"
        break;

        case "RETROEXTREME":
        link ="/retroMarkExtreme"
        break;
    
      default:
        link = "/retroMarkProducts"
        break;
    }
  return (
<>
  <div className="box">
    <div className="box-top">
      <img className="box-image" src={image}/>
      <div className="title-flex">
        <h3 className="box-title">{productName}</h3>
        <p className="user-follow-info">{colors}</p>
      </div>
      <p className="description">{description}</p>
    </div>
    <Link to={link}  className="button">{button}</Link>
  </div>
</>
    
  )
}

export default ProductsCard

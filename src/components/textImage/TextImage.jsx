import wLaptop from '../../images/w-laptop.jpg'
import './textImage.css'


export const TextImage = (props) => {
    const {orderRight, data} = props
    const orderRightClassName = orderRight && 'order-right' 

  return (
    <div className='text-image'>
        <div className={`text-container ${orderRightClassName}`}  >
            <h2 className='about-us-text-image-heading' >{data.title}</h2>
            <p>
           {data.description}
            </p>
        </div>
        <img src={wLaptop} />
    </div>
  )
}


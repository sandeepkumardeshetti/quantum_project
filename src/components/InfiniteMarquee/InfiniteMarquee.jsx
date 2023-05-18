import './infiniteMarquee.css'
import gmrLogo from '../../images/gmr-logo.png'
import hmdaLogo from '../../images/HMDA_logo1.jpg'
import jswLogo from '../../images/JSW_Group_logo.svg.png'
import ghmcLogo from '../../images/GHMC_logo.jpg'
import meilLogo from '../../images/meil_logo.png'
import ltLogo from '../../images/LT_logo.png'
import bgLogo from '../../images/BG_logo.png'








const row1 = [
    `${gmrLogo}`,
    `${hmdaLogo}`,
    `${jswLogo}`,
    `${ghmcLogo}`,
    `${meilLogo}`,
    `${ltLogo}`,
    `${bgLogo}`
  ];

  const row2 = [
    `${gmrLogo}`,
   `${hmdaLogo}`,
   `${jswLogo}`,
   `${ghmcLogo}`,
   `${meilLogo}`,
   `${ltLogo}`,
   `${bgLogo}`
  ];

export const InfiniteMarquee = () => {
  return (
    <div className="marquee-container">
        <h2>CLIENTELE</h2>  
           
      <div className="scroll-parent">
        <div className="scroll-element primary">
        {
            row1.map((image, index) => {
              return (
                
                  <img key={index} src={image} alt="image" />
              )
            })
  
        }


        </div>
        <div className="scroll-element secondary">
          
        {
            row1.map((image, index) => {
              return (
                
                  <img key={index} src={image} alt="image" />
              )
            })
  
        }
        </div>
      </div>
      <div className="scroll-parent">
        <div className="scroll-element primary2">
        {
            row1.map((image, index) => {
              return (
                
                  <img key={index} src={image} alt="image" />
              )
            })
  
        }


        </div>
        <div className="scroll-element secondary2">
          
        {
            row1.map((image, index) => {
              return (
                
                  <img key={index} src={image} alt="image" />
              )
            })
  
        }
        </div>
      </div>
    </div>
  )
}


import Hero  from '../../components/hero/Hero'
import { heroAboutUsData } from '../../constants/data'
import { TextImage } from '../../components/textImage/TextImage'
import {FaQuoteLeft} from 'react-icons/fa'
import { Footer } from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import './aboutUs.css'
import { aboutUsData } from '../../constants/data'

const AboutUs = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Hero heroData={heroAboutUsData} />
    <h2 className='history-main-heading' >Our History</h2>
    <section className='history-details-container' >
      <TextImage orderRight={false} data={aboutUsData[0]} />
       <TextImage orderRight={true} data={aboutUsData[1]} />
      <TextImage orderRight={false} data={aboutUsData[2]} /> 
    </section>
    

    <article className='company-values' >
        <h2 className='title' >
           Mission & Vision
        </h2>
        <FaQuoteLeft color="#1ae6d5" size={55} />
        <strong className='mission' > Mission is to satisfy our customers with superior quality, value and service.</strong>
        <strong className='quote' > Vision as a company is to ensure the longevity of our company through repeat and referral business achieved by customer satisfaction </strong>
        
    </article>
    <Footer />

    </motion.div>
  )
}


export default AboutUs
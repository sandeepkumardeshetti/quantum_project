
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'
import {AnimationOnScroll} from '../onScrollAnimation/OnScrollAnimation'
import './hero.css'


 const Hero = ({heroData}) => {
  const {ref, animation} = AnimationOnScroll()

  return (
    <section ref={ref} className='hero' >
    <motion.h1  animate={animation} transition={{duration : 4}}  className='heading' >{heroData.title}</motion.h1>
    <motion.h3  animate={animation} transition={{duration : 5}}  className='heading-2' >{heroData.subtitle}</motion.h3>
    <motion.p animate={animation} transition={{duration : 6}}  className='paragraph' >{heroData.description}</motion.p>
    
      {heroData.button === "View our services" ?
    (<Link to='/services'  >
    <motion.button animate={animation} transition={{duration : 6}} className='hero-button' >{heroData.button}</motion.button>
    </Link>) :
    (<Link to='/contact'  >
    <motion.button animate={animation} transition={{duration : 6}}  className='hero-button' >{heroData.button}</motion.button>
    </Link>)}
   
    </section>
  )
}

export default Hero
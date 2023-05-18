import './aboutUsHome.css'
import wLaptop from '../../images/w-laptop.jpg'
import { Link } from 'react-router-dom'

import { motion} from 'framer-motion'
import {AnimationOnScroll} from '../onScrollAnimation/OnScrollAnimation'

export const AboutUsHome = () => {
  const {ref, animation} = AnimationOnScroll()
  return (
    <section className='about-us-home' >
        <div ref={ref} className='about-us-home-text-con' >
            <motion.h2 animate={animation} transition={{duration : 4}} >A Little About Us</motion.h2>
            <motion.p animate={animation} transition={{duration : 5}} >We <strong>Quantum Industries</strong> departed our journey From early 2013 holding experience more than 10 years in the road safety
                industry. Expertise in markets like National Highways, State Roads, Military, Airport markings,
                Industrial Markings etc accompanied aspect being customer satisfaction. Known for the best customer
                satisfaction and responsiveness, company always held its position and respect high in the customer
                point of view.
            </motion.p>
        </div>
        <img src={wLaptop} />
        <Link to="/about" >
          <button >
              GET TO KNOW US
          </button>
          </Link>
    </section>
  )
}



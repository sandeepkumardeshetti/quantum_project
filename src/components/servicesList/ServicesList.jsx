import './servicesList.css'
import { servicesArr } from '../../constants/data'

import { motion} from 'framer-motion'
import {AnimationOnScroll} from '../onScrollAnimation/OnScrollAnimation'

export const ServicesList = () => {
  const {ref, animation} = AnimationOnScroll()

  return (
    <ul ref={ref} className='services-list-home' >
        {
            servicesArr.map(arr => {
                return (
                    <li key={arr.id} >
                    {arr.icon}
                    <motion.h2 animate={animation} transition={{duration : 4}} >{arr.title}</motion.h2>
                    <motion.p animate={animation}  transition={{duration : 5}} >{arr.description}</motion.p>
                    </li>
                )
            })
        }
    </ul>
  )
}



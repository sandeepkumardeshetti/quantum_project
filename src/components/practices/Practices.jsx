import { practicesData } from '../../constants/data'
import './practices.css'
import { PracticeCard } from '../practiceCard/PracticeCard'
import { motion} from 'framer-motion'
import {AnimationOnScroll} from '../onScrollAnimation/OnScrollAnimation'
import { Link } from 'react-router-dom'



const Practices = () => {
  const {ref} = AnimationOnScroll()
  return (
    <div  className='practices' >
        <div  className='practices-title-descrption' >
          <h1 className='practices-title' >Always Exceeding Expectations</h1>
          <p className='practices-description' >Professional, premium, personable. That’s us in a nutshell. We will go over and above to ensure we deliver only the very best service. We do this whilst still maintaining that family-friendly feel that our clients love about us.</p>
        </div>
         <ul ref={ref}  className='practices-cards-con' >
            {
                practicesData.map((eachPractice,i) => (
                    <PracticeCard index={i}  key={eachPractice.title} practice={eachPractice} />
                ))
            }
          </ul>
          <Link to="/about" >
          <button >
              GET TO KNOW US
          </button>
          </Link>
          
    </div>
  )
}

export default Practices

import { heroHomeData } from '../../constants/data'; 
import { AboutUsHome,Footer,Hero,Practices,Services } from '../../components/AllComponents';
import { motion } from 'framer-motion';
import {FaQuoteLeft} from 'react-icons/fa';
import './home.css';
import { InfiniteMarquee } from '../../components/InfiniteMarquee/InfiniteMarquee';
import {AnimationOnScroll} from '../../components/onScrollAnimation/OnScrollAnimation';


const Home = () => {
  const {ref, animation} = AnimationOnScroll();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Hero heroData={heroHomeData}  />
    <Practices />
    <Services />
    <InfiniteMarquee />
    <article ref={ref} className='company-values' >
        <h2 className='title' >
           Mission & Vision
        </h2>
        <FaQuoteLeft color="#1ae6d5" size={55} />
        <motion.strong className='mission' animate={animation} transition={{duration : 4}} > Mission is to satisfy our customers with superior quality, value and service.</motion.strong>
        <motion.strong animate={animation} transition={{duration : 6}} className='quote' > Vision as a company is to ensure the longevity of our company through repeat and referral business achieved by customer satisfaction </motion.strong>
        
    </article> 
    <AboutUsHome />
    <Footer />
    </motion.div>
  )
}


export default Home
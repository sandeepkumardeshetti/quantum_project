import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export const AnimationOnScroll = () => {
    const [ref, inView] = useInView({
        threshold : 0.2
      })
      const animation = useAnimation()
    
      useEffect(() => {
        if (inView) {
          animation.start({
            x : 0,  transition : {
              type : 'spring',duration: 3,  bounce : 0.3
            }
          })
        }
        else if(!inView){
          animation.start({x : '-100vw'})
        }
      }, [inView])
      return {animation, ref}
}


import { motion} from 'framer-motion';
import React from 'react'

const Marquee = () => {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear",duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold pr-10'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear",duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold'>we are ochi</motion.h1>

        </div>
      
    </div>
  )
}

export default Marquee

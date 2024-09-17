
import React, { useEffect } from 'react'
import styles from './Home.module.css'

const Intro = () => {
 
    return (
        
          <section  className='text-center max-w-[600px] mx-auto '>
          <p  className={`text-[40px] font-bold ${styles.anim_fadeup}`} >Unlock Your Digital Potential <br /> extra content</p>
          <p className={`text-[15px]  text-gray-400 ${styles.anim_fadeup}`}>Your One-Stop Shop for Sleek Websites.</p>
          <button className={`${styles.anim_fadeup} m-10 rounded-[100px] bg-white p-3 px-10 text-blue-950 `}>Get Started</button>
          </section>
            
    
       
      )
}

export default Intro
import React from 'react'
import styles from './_components/Home.module.css'
import Intro from './_components/Intro'
import IntroImage from './_components/IntroImage'
import Projects from './_components/Projects'
import Stories from './_components/Stories'
import Features from './_components/Features'
import Cookie from './_components/Cookie'
import { CardAnimated } from './_components/CardAnimated'
const page = () => {
  
  return (
    <div className={` ${styles.main} `} > <div className={`${styles.mainin}`}>
      
    <div className='px-5'>
      {/* Intro */}
      <br />
      <br />
      <br />
      <Intro></Intro>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
        <IntroImage></IntroImage>
        <br /><br /><br />
      <Projects></Projects>
      <br /><br /><br />
      <Stories></Stories>
      <br /><br /><br />
      <Features></Features>
      <br /><br /><br />
      <Cookie></Cookie>
      <br /><br /><br />
    </div>
    
    </div>
    </div>
  )
}

export default page
'use client'
import React, { useEffect, useRef } from 'react'
import { easeIn, stagger, useAnimate, useInView } from 'framer-motion'
import {motion} from "framer-motion";
import styles from './Home.module.css'
import { InfiniteScroll } from './InfiniteScroll';
const Stories = () => {
    const [scope,animate]=useAnimate();
    const inView=useInView(scope,{once:true})
    
    const items=[{quote:"1",name:"1",title:"1"},{quote:"2",name:"2",title:"2"},{quote:"3",name:"3",title:"3"},{quote:"4",name:"4",title:"4"},{quote:"5",name:"5",title:"5"}]
    useEffect(()=>{
        if(inView){
            animate(".anim_fadeup",{opacity:[0,1],y:[20,0]},{
                duration:0.5,ease:easeIn,delay:stagger(0.3)
              })
              
        }
  
    },[inView])
  return (
    <div ref={scope} className='text-center'>
        <p className='text-[30px] font-bold anim_fadeup leading-[50px] '>Stories</p>
        
       <InfiniteScroll items={items} speed='fast'></InfiniteScroll>
       <InfiniteScroll items={items} direction='right' speed='fast'></InfiniteScroll>


        
    </div>
  )
}   

export default Stories
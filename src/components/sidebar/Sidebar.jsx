import React, { useState } from 'react'
import "./Sidebar.scss";
import Links from './links/Links';
import Toggle from './toggle/Toggle';
import { delay, motion } from 'framer-motion';
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants={
    open :{
      clipPath:"circle(1200px at 0px 50px)",
      transition:{
        type:"spring",
        stiffness:"20",
      }
    },
    closed :  {
       clipPath:"circle(20px at 40px 28px)",
       transition:{
        delay:"0.0",
        type:"spring",
        stiffness:"400",
        damping:"40",
       },

    },
  };
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className='links' variants={variants}>
        
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar

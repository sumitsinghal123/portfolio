import React from 'react'
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <span className='name'> Sumit</span>Singhal</motion.span>
        <motion.div className='socials'
        initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5}}>
          <a href='#'><img src="../../../public/facebook.png" alt="linkdin"></img></a>
          <a href='#'><img src="../../../public/instagram.png" alt="github"></img></a>
          <a href='#'><img src="../../../public/youtube.png" alt="mail"></img></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar

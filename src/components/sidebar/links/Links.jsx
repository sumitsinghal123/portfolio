import { stagger ,motion} from 'framer-motion'
import React from 'react'

const Links = () => {
  const variants = {
    open: {
      transiton: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transiton: {
        staggerChildren: 0.05,
        staggerChildren: -1,
      }
    }
  }
  const itemsvariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 1,
      opacity: 0,
    },
  };

const items = ["Homepage", "Services", "Portfolio", "Contact","About"];
return (
  <motion.div className='li' variants={variants}>
    {items.map((item) => (
      <motion.a 
      href={`#${item}`} 
      key={item} 
      variants={itemsvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >
        {item}</motion.a>
    ))}
  </motion.div>
);
};

export default Links

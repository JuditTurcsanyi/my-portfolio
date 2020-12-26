import React from 'react';
//Components
import Intro from '../components/Intro';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animations'


function Home() {
    return (
      <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className="home">
        <Intro />
      </motion.div>
    );
  }
  
  export default Home;
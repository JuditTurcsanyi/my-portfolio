import React from 'react';
//Components
import Intro from '../components/Intro';
import Contacts from '../components/contacts';
import Logos from '../components/logos';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animations'


function Home() {
    return (
      <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className="home">
        <Intro />
        <Logos />
        <Contacts />
      </motion.div>
    );
  }
  
  export default Home;
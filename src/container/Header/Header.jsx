import React from 'react';
import {motion} from 'framer-motion';
import './Header.scss';
import { images } from '../../constants';

import {AppWrap} from '../../wrapper';

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p'>Hello, I am</p>
              <h1 className='Head'>Maximiliano</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p'>Web Developer</p>
            <p className='p'> Student</p>

          </div>
        </div>

      </motion.div>


      <motion.div
        whileInView={{ opacity: [0, 1],scale: [0, 0.9], marginTop: [35, 35] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <img src={images.Portada} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1.1],rotate: [0, 360], opacity: [0, 0.5] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle} alt="profile_circle"
          className='overlay_circle'
        />
      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.php, images.angu, images.boot, images.db].map((circle,index)=>(
         <div className='cirlce-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
         </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap(Header,'home');
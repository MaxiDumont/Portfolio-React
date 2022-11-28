import React from 'react'
import {BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='app__social'>
        <div>
        <a onClick={() => openInNewTab('https://www.linkedin.com/in/maximiliano-dumont-a30320238/')}>
        <BsLinkedin/>
        </a>
        </div>
    </div>
  )
}

export default SocialMedia
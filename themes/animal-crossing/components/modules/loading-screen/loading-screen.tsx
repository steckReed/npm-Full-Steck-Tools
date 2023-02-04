import ImageContainer from '../../elements/image-container/image-container';
import styles from './_loading-screen.module.scss'
import { useState } from 'react';

export default function LoadingScreen({
  setLoadingScreenLoading,
  imgSrc  ='',
  imgH    ='54',
  imgW    ='54',
  bgColor ='teal',
}){
  setTimeout(() => { setLoadingScreenLoading(false) }, 680);

  return(
  <>
    <div id='ac-loading-screen-container' className={`${styles['loading-screen-container']} grid position-sticky-top-middle`}
      style={{ backgroundColor: bgColor }}>

      <div className='grid'>
        <div className={`${styles['loading-screen-icon']}`}>
          <ImageContainer reqImg={`${imgSrc}`} h={imgH} w={imgW} />
        </div>  
      </div>

    </div>
  </>
  )
}
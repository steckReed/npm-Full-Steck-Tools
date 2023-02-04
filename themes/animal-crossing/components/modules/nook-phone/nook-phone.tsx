import { fstGetDateTime } from '../../../functions/get-date-time-wish/get-date-time-wish';
import { MdLocationPin, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsFillCircleFill } from 'react-icons/bs'
import ImageContainer from '../../elements/image-container/image-container';
import { importAllFromDir } from '@Root/src/assets/functions/import-all-from-dir/import-all-from-dir';
import { useState } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';


export default function NookPhone({
  setLoadingScreenLoading
}){
  const { time }  = fstGetDateTime();
  const appIcon   = importAllFromDir(require.context('../../../icons', false, /\.(png|jpe?g|svg)$/));

  const [currAppName, setCurrAppName] = useState('Nook Phone');


  return(
  <>
    <div id='nook-phone' className='grid shadow3' 
        style={{ gridTemplateRows:'min-content auto min-content', borderRadius: '60px', height:'298px', width:'198px', padding:'10px 20px' }}>

      <div id='nook-phone-head' className='grid ' 
            style={{ gridTemplateColumns:'1fr 1fr 1fr', marginTop:'0px' }}>
        <span className='flex' style={{ gridRow: 1, gridColumn: 1 }}>
          <span className='grid ac-nav-icon' 
                style={{ position: 'relative',
                         top: '-7px',
                         left: '-8px',
                         gridTemplateColumns:'9px 9px 9px', 
                         gridTemplateRows:'5px 5px 5px', 
                         gap:'0px',
                         }}>
            <span style={{ gridRow:3, gridColumn:1 }}><MdOutlineKeyboardArrowUp /></span>
            <span style={{ gridRow:2, gridColumn:2 }}><MdOutlineKeyboardArrowUp /></span>
            <span style={{ gridRow:3, gridColumn:2 }}><MdOutlineKeyboardArrowUp /></span>
            <span style={{ gridRow:1, gridColumn:3 }}><MdOutlineKeyboardArrowUp /></span>
            <span style={{ gridRow:2, gridColumn:3 }}><MdOutlineKeyboardArrowUp /></span>
            <span style={{ gridRow:3, gridColumn:3 }}><MdOutlineKeyboardArrowUp /></span>

            <span style={{ gridRow:3, 
                           gridColumn:4, 
                           fontSize: '12px',
                           position: 'relative',
                           top: '-2px',
                           left: '4px',}}><BsFillCircleFill /></span>

          </span>
        </span>

        <span className='grid' style={{ gridRow: 1, gridColumn: 2 }}>
          <p className='color-ac-gray ac-fontFamily-primary text-no-wrap'>{time}</p>
        </span>

        <span className='grid' style={{ gridRow: 1, gridColumn: 3 }}>
          <span className='grid ac-nav-icon border-solid-ac-gray' 
            style={{ fontSize:'12px', borderRadius:'50px', borderWidth:'2px' }}>
            <MdLocationPin />
          </span>
        </span>
      </div>

      <div id='nook-phone-body' className='grid' style={{ gridTemplateRows:'min-content 1fr', height:'100%', width:'100%' }}>
        <span id='nook-phone-app-name-container' className='grid'>
          <h2 id='nook-phone-app-name' className='color-ac-font-primary ac-fontFamily-secondary text'
              style={{ margin: 0 }}>{currAppName}</h2>
        </span>

        <span className='grid' 
              style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', gap:'12px 8px' }}>
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Camera')}
                onClick={() => {
                  setTimeout(() => {
                    setLoadingScreenLoading(true)
                  }, 195);
                }}>
            <ImageContainer reqImg={`${appIcon['Camera.png'].default.src}`}     h='46' w='46' />
          </div>              
          <div className='ac-app-icon' 
              onMouseOver={() => setCurrAppName('Messages')}
              onClick={() => {
                setTimeout(() => {
                  setLoadingScreenLoading(true)
                }, 195);
              }}>
            <ImageContainer reqImg={`${appIcon['Messages.png'].default.src}`}   h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Books')}>
            <ImageContainer reqImg={`${appIcon['Books.png'].default.src}`}      h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Clock')}>
            <ImageContainer reqImg={`${appIcon['Clock.png'].default.src}`}      h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Calculator')}>
            <ImageContainer reqImg={`${appIcon['Calculator.png'].default.src}`} h='46' w='46'/>
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Files')}>
            <ImageContainer reqImg={`${appIcon['Files.png'].default.src}`}      h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Fitness')}>
            <ImageContainer reqImg={`${appIcon['Fitness.png'].default.src}`}    h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Discord')}>
            <ImageContainer reqImg={`${appIcon['Discord.png'].default.src}`}    h='46' w='46' />
          </div>  
          <div className='ac-app-icon' 
                onMouseOver={() => setCurrAppName('Contacts')}>
            <ImageContainer reqImg={`${appIcon['Contacts.png'].default.src}`}   h='46' w='46' />
          </div>

        </span>
      </div>

      <div id='nook-phone-foot' className='flex'>
          <span className='ac-page-icon hightlight'/>
          <span className='ac-page-icon'></span>
      </div>

    </div>
  </>
  )
}
/*

  Purpose is to Make ImageWithFallback Easier to Use

  @Requires npm Package: `npm i lodash`

  @Use:
    <ImageContainer reqImg={`${appIcon['ImageName.png'].default.src}`} />

    // Alt Method (Utilizing Obj Created Via `importAllFromDir`) To Get Auto-Calc Height & Width
    <Component obj={appIcon['ImageName.png']} objSrc='default.src' objH='default.height' objW='default.width'/>

  @Params:

  @Ret:

*/
import ImageWithFallback from './image-with-fallback/image-with-fallback';

export default function ImageContainer({
  // Default Method
  reqImg      = '',         // <- Required When Using `Default Method`
  fallbackImg = '/imgFallback.svg',
  altText     = 'image alt text',
  h           = '46',
  w           = '46',
  i           = '',

  // Alt Method (Object Support)
  obj         = {},         // <- Required When Using `Alt Method`
  objSrc      = undefined,  // <- Required When Using `Alt Method`
  objAltText  = undefined,
  objH        = undefined,
  objW        = undefined,
}) {

  // If Image Object, Set Passed Values
  if (objSrc) {
    let _ = require('lodash');
    reqImg = _.get(obj, objSrc);

    if (objAltText) { altText = _.get(obj, objAltText); }

    // Method to get auto calc height & width
    if (objH) { h = _.get(obj, objH); }
    if (objW) { w = _.get(obj, objW); }
  }

  return (
    <>
      <ImageWithFallback
        src={`${reqImg}`}
        fallbackSrc={`${fallbackImg}`}
        height={`${h}`}
        width={`${w}`}
        alt={`${altText}`}
        draggable="false"
        style={{
          userSelect: 'none'
        }}
      />
    </>
  )
}

import showToggle from "../../ShowToggle"
import { addClipboardEventListener, removeClipboardEventListener } from './components/clipboard'
import { useEffect } from "react"
const Text = () => {
  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);
  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Text</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Family</h3>
      <div style={{display: 'none'}}>
        <p className="font-primary fontSize-md padding-2 textAlign-center">font-primary </p>
        <p className="font-secondary fontSize-md padding-2 textAlign-center">font-secondary </p>   
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Size</h3>
      <div style={{display: 'none'}}>
        <p className="fontSize-xs padding-2 textAlign-center">fontSize-xs</p>
        <p className="fontSize-sm padding-2 textAlign-center">fontSize-sm</p>
        <p className="fontSize-md padding-2 textAlign-center">fontSize-md</p>
        <p className="fontSize-lg padding-2 textAlign-center">fontSize-lg</p>
        <p className="fontSize-xl padding-2 textAlign-center">fontSize-xl</p>      
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Weight</h3>
      <div style={{display: 'none'}}>
        <p className="fontWeight-sm padding-2 textAlign-center">fontWeight-sm</p>
        <p className="fontWeight-md padding-2 textAlign-center">fontWeight-md</p>
        <p className="fontWeight-lg padding-2 textAlign-center">fontWeight-lg</p>
        <p className="fontWeight-xl padding-2 textAlign-center">fontWeight-xl</p>      
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Texty Alignment</h3>
      <div style={{display: 'none'}}>
        <p className="textAlign-center padding-2">textAlign-center</p>
        <p className="textAlign-start padding-2">textAlign-start</p>
        <p className="textAlign-end padding-2">textAlign-end</p>
        <p className="textAlign-justify padding-2" > textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify textAlign-justify </p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Text Decorations</h3>
      <div style={{display: 'none'}}>
        <p className="textDecoration-none padding-2 textAlign-center">textDecoration-none</p>
        <p className="textDecoration-underline padding-2 textAlign-center">textDecoration-underline</p>
        <br />
        <p className="textDecoration-overline padding-2 textAlign-center">textDecoration-overline</p>
        <p className="textDecoration-line-through padding-2 textAlign-center">textDecoration-line-through</p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">List Styles</h3>
      <div style={{display: 'none'}} className="m-a textAlign-center">
        <ul className="m-a">
          <li className="listStyle-none padding-2 width-2 m-a">listStyle-none</li>
          <li className="listStyle-disc padding-2 width-2 m-a">listStyle-disc</li>
          <li className="listStyle-circle padding-2 width-2 m-a">listStyle-circle</li>
          <li className="listStyle-square padding-2 width-2 m-a">listStyle-square</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Text
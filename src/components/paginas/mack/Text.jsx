import showToggle from "../../ShowToggle"
import CopyableText from '../../copy'
const Text = () => {

  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Text</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Family</h3>
      <div style={{display: 'none'}}>
        <p className="font-primary fontSize-md padding-2 textAlign-center">font-primary <CopyableText /></p>
        <p className="font-secondary fontSize-md padding-2 textAlign-center">font-secondary <CopyableText /></p>   
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Size</h3>
      <div style={{display: 'none'}}>
        <p className="fontSize-xs padding-2 textAlign-center">fontSize-xs<CopyableText /></p>
        <p className="fontSize-sm padding-2 textAlign-center">fontSize-sm<CopyableText /></p>
        <p className="fontSize-md padding-2 textAlign-center">fontSize-md<CopyableText /></p>
        <p className="fontSize-lg padding-2 textAlign-center">fontSize-lg<CopyableText /></p>
        <p className="fontSize-xl padding-2 textAlign-center">fontSize-xl<CopyableText /></p>      
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font Weight</h3>
      <div style={{display: 'none'}}>
        <p className="fontWeight-sm padding-2 textAlign-center">fontWeight-sm<CopyableText /></p>
        <p className="fontWeight-md padding-2 textAlign-center">fontWeight-md<CopyableText /></p>
        <p className="fontWeight-lg padding-2 textAlign-center">fontWeight-lg<CopyableText /></p>
        <p className="fontWeight-xl padding-2 textAlign-center">fontWeight-xl<CopyableText /></p>      
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Texty Alignment</h3>
      <div style={{display: 'none'}}>
        <p className="textAlign-center padding-2">textAlign-center<CopyableText /></p>
        <p className="textAlign-start padding-2">textAlign-start<CopyableText /></p>
        <p className="textAlign-end padding-2">textAlign-end<CopyableText /></p>
        <p className="textAlign-justify padding-2" >textAlign-justify <CopyableText /></p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Text Decorations</h3>
      <div style={{display: 'none'}}>
        <p className="textDecoration-none padding-2 textAlign-center">textDecoration-none<CopyableText /></p>
        <p className="textDecoration-underline padding-2 textAlign-center">textDecoration-underline<CopyableText /></p>
        <br />
        <p className="textDecoration-overline padding-2 textAlign-center">textDecoration-overline<CopyableText /></p>
        <p className="textDecoration-line-through padding-2 textAlign-center">textDecoration-line-through<CopyableText /></p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7  text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">List Styles</h3>
      <div style={{display: 'none'}} className="m-a textAlign-center">
        <ul className="m-a">
          <li className="listStyle-none padding-2 width-2 m-a">listStyle-none<CopyableText /></li>
          <li className="listStyle-disc padding-2 width-2 m-a">listStyle-disc<CopyableText /></li>
          <li className="listStyle-circle padding-2 width-2 m-a">listStyle-circle<CopyableText /></li>
          <li className="listStyle-square padding-2 width-2 m-a">listStyle-square<CopyableText /></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Text
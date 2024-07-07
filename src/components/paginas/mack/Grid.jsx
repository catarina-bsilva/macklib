import showToggle from "../../ShowToggle"
import CopyableText from '../../copy'
const Grid = () => {

  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Grid</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Container</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">container <CopyableText /></p>
          <p className="textAlign-center">container100 <CopyableText /></p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Row</h3>
      <div style={{display: 'none'}}>
        <p className="textAlign-center">row <CopyableText /></p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Gaps</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex flexDirection-column align-center justify-center">
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-1 <CopyableText /></h4>
            <p className="padding-1">10px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-2 <CopyableText /></h4>
            <p className="padding-1">20px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-3 <CopyableText /></h4>
            <p className="padding-1">30px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-4 <CopyableText /></h4>
            <p className="padding-1">50px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-5 <CopyableText /></h4>
            <p className="padding-1">75px</p>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Justify Content</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">justify-flex-start <CopyableText /></p>
          <p className="textAlign-center">justify-flex-end <CopyableText /></p>
          <p className="textAlign-center">justify-center <CopyableText /></p>
          <p className="textAlign-center">justify-space-between <CopyableText /></p>
          <p className="textAlign-center">justify-space-around <CopyableText /></p>
          <p className="textAlign-center">justify-space-evenly <CopyableText /></p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Align items</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">align-flex-start <CopyableText /></p>
          <p className="textAlign-center">align-flex-end <CopyableText /></p>
          <p className="textAlign-center">align-center <CopyableText /></p>
          <p className="textAlign-center">align-space-between <CopyableText /></p>
          <p className="textAlign-center">align-space-around <CopyableText /></p>
          <p className="textAlign-center">align-space-evenly <CopyableText /></p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Col</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex justify-space-around">
          <div>
            <p className="textAlign">col-1-xs <CopyableText /></p>
            <p className="textAlign">col-2-xs <CopyableText /></p>
            <p className="textAlign">col-3-xs <CopyableText /></p>
            <p className="textAlign">col-4-xs <CopyableText /></p>
            <p className="textAlign">col-5-xs <CopyableText /></p>
            <p className="textAlign">col-6-xs <CopyableText /></p>
            <p className="textAlign">col-7-xs <CopyableText /></p>
            <p className="textAlign">col-8-xs <CopyableText /></p>
            <p className="textAlign">col-9-xs <CopyableText /></p>
            <p className="textAlign">col-10-xs <CopyableText /></p>
            <p className="textAlign">col-11-xs <CopyableText /></p>
            <p className="textAlign">col-12-xs <CopyableText /></p>
          </div>
          <div>
            <p className="textAlign">col-1-sm <CopyableText /></p>
            <p className="textAlign">col-2-sm <CopyableText /></p>
            <p className="textAlign">col-3-sm <CopyableText /></p>
            <p className="textAlign">col-4-sm <CopyableText /></p>
            <p className="textAlign">col-5-sm <CopyableText /></p>
            <p className="textAlign">col-6-sm <CopyableText /></p>
            <p className="textAlign">col-7-sm <CopyableText /></p>
            <p className="textAlign">col-8-sm <CopyableText /></p>
            <p className="textAlign">col-9-sm <CopyableText /></p>
            <p className="textAlign">col-10-sm <CopyableText /></p>
            <p className="textAlign">col-11-sm <CopyableText /></p>
            <p className="textAlign">col-12-sm <CopyableText /></p>
          </div>
          <div>
            <p className="textAlign">col-1-md <CopyableText /></p>
            <p className="textAlign">col-2-md <CopyableText /></p>
            <p className="textAlign">col-3-md <CopyableText /></p>
            <p className="textAlign">col-4-md <CopyableText /></p>
            <p className="textAlign">col-5-md <CopyableText /></p>
            <p className="textAlign">col-6-md <CopyableText /></p>
            <p className="textAlign">col-7-md <CopyableText /></p>
            <p className="textAlign">col-8-md <CopyableText /></p>
            <p className="textAlign">col-9-md <CopyableText /></p>
            <p className="textAlign">col-10-md <CopyableText /></p>
            <p className="textAlign">col-11-md <CopyableText /></p>
            <p className="textAlign">col-12-md <CopyableText /></p>
          </div>
          <div>
            <p className="textAlign">col-1-lg <CopyableText /></p>
            <p className="textAlign">col-2-lg <CopyableText /></p>
            <p className="textAlign">col-3-lg <CopyableText /></p>
            <p className="textAlign">col-4-lg <CopyableText /></p>
            <p className="textAlign">col-5-lg <CopyableText /></p>
            <p className="textAlign">col-6-lg <CopyableText /></p>
            <p className="textAlign">col-7-lg <CopyableText /></p>
            <p className="textAlign">col-8-lg <CopyableText /></p>
            <p className="textAlign">col-9-lg <CopyableText /></p>
            <p className="textAlign">col-10-lg <CopyableText /></p>
            <p className="textAlign">col-11-lg <CopyableText /></p>
            <p className="textAlign">col-12-lg <CopyableText /></p>
          </div>
          <div>
            <p className="textAlign">col-1-xl <CopyableText /></p>
            <p className="textAlign">col-2-xl <CopyableText /></p>
            <p className="textAlign">col-3-xl <CopyableText /></p>
            <p className="textAlign">col-4-xl <CopyableText /></p>
            <p className="textAlign">col-5-xl <CopyableText /></p>
            <p className="textAlign">col-6-xl <CopyableText /></p>
            <p className="textAlign">col-7-xl <CopyableText /></p>
            <p className="textAlign">col-8-xl <CopyableText /></p>
            <p className="textAlign">col-9-xl <CopyableText /></p>
            <p className="textAlign">col-10-xl <CopyableText /></p>
            <p className="textAlign">col-11-xl <CopyableText /></p>
            <p className="textAlign">col-12-xl <CopyableText /></p>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Grid
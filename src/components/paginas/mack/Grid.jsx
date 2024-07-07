import showToggle from "../../ShowToggle"
import { addClipboardEventListener, removeClipboardEventListener } from "../../clipboard"
  import { useEffect } from "react"
const Grid = () => {
  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);
  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Grid</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Container</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">container</p>
          <p className="textAlign-center">container100</p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Row</h3>
      <div style={{display: 'none'}}>
        <p className="textAlign-center">row</p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Gaps</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex flexDirection-column align-center justify-center">
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-1: </h4>
            <p className="padding-1">10px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-2: </h4>
            <p className="padding-1">20px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-3: </h4>
            <p className="padding-1">30px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-4: </h4>
            <p className="padding-1">50px</p>
          </div>
          <div className="display-flex">
            <h4 className="fontWeight-lg padding-1">gap-5: </h4>
            <p className="padding-1">75px</p>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Justify Content</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">justify-flex-start</p>
          <p className="textAlign-center">justify-flex-end</p>
          <p className="textAlign-center">justify-center</p>
          <p className="textAlign-center">justify-space-between</p>
          <p className="textAlign-center">justify-space-around</p>
          <p className="textAlign-center">justify-space-evenly</p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Align items</h3>
      <div style={{display: 'none'}}>
        <div className="container">
          <p className="textAlign-center">align-flex-start</p>
          <p className="textAlign-center">align-flex-end</p>
          <p className="textAlign-center">align-center</p>
          <p className="textAlign-center">align-space-between</p>
          <p className="textAlign-center">align-space-around</p>
          <p className="textAlign-center">align-space-evenly</p>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Col</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex justify-space-around">
          <div>
            <p className="textAlign">col-1-xs</p>
            <p className="textAlign">col-2-xs</p>
            <p className="textAlign">col-3-xs</p>
            <p className="textAlign">col-4-xs</p>
            <p className="textAlign">col-5-xs</p>
            <p className="textAlign">col-6-xs</p>
            <p className="textAlign">col-7-xs</p>
            <p className="textAlign">col-8-xs</p>
            <p className="textAlign">col-9-xs</p>
            <p className="textAlign">col-10-xs</p>
            <p className="textAlign">col-11-xs</p>
            <p className="textAlign">col-12-xs</p>
          </div>
          <div>
            <p className="textAlign">col-1-sm</p>
            <p className="textAlign">col-2-sm</p>
            <p className="textAlign">col-3-sm</p>
            <p className="textAlign">col-4-sm</p>
            <p className="textAlign">col-5-sm</p>
            <p className="textAlign">col-6-sm</p>
            <p className="textAlign">col-7-sm</p>
            <p className="textAlign">col-8-sm</p>
            <p className="textAlign">col-9-sm</p>
            <p className="textAlign">col-10-sm</p>
            <p className="textAlign">col-11-sm</p>
            <p className="textAlign">col-12-sm</p>
          </div>
          <div>
            <p className="textAlign">col-1-md</p>
            <p className="textAlign">col-2-md</p>
            <p className="textAlign">col-3-md</p>
            <p className="textAlign">col-4-md</p>
            <p className="textAlign">col-5-md</p>
            <p className="textAlign">col-6-md</p>
            <p className="textAlign">col-7-md</p>
            <p className="textAlign">col-8-md</p>
            <p className="textAlign">col-9-md</p>
            <p className="textAlign">col-10-md</p>
            <p className="textAlign">col-11-md</p>
            <p className="textAlign">col-12-md</p>
          </div>
          <div>
            <p className="textAlign">col-1-lg</p>
            <p className="textAlign">col-2-lg</p>
            <p className="textAlign">col-3-lg</p>
            <p className="textAlign">col-4-lg</p>
            <p className="textAlign">col-5-lg</p>
            <p className="textAlign">col-6-lg</p>
            <p className="textAlign">col-7-lg</p>
            <p className="textAlign">col-8-lg</p>
            <p className="textAlign">col-9-lg</p>
            <p className="textAlign">col-10-lg</p>
            <p className="textAlign">col-11-lg</p>
            <p className="textAlign">col-12-lg</p>
          </div>
          <div>
            <p className="textAlign">col-1-xl</p>
            <p className="textAlign">col-2-xl</p>
            <p className="textAlign">col-3-xl</p>
            <p className="textAlign">col-4-xl</p>
            <p className="textAlign">col-5-xl</p>
            <p className="textAlign">col-6-xl</p>
            <p className="textAlign">col-7-xl</p>
            <p className="textAlign">col-8-xl</p>
            <p className="textAlign">col-9-xl</p>
            <p className="textAlign">col-10-xl</p>
            <p className="textAlign">col-11-xl</p>
            <p className="textAlign">col-12-xl</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
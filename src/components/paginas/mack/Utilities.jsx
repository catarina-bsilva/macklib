import showToggle from "../../ShowToggle"
import { useEffect } from "react"
import { addClipboardEventListener, removeClipboardEventListener } from "../../clipboard"
import { FiCopy } from "react-icons/fi"

const Utilities = () => {

  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);
  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Utilities</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Padding</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex justify-space-between align-center">
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1" >padding-0 <FiCopy /> </h4><span> : </span>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">padding-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">padding-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">padding-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">padding-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">padding-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingLeft-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingRight-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingTop-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">paddingBottom-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Margin</h3>
      <div style={{display: 'none'}}>
      <div className="container display-flex justify-space-between align-center">
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">margin-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginLeft-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginRight-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginTop-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-0: </h4>
              <p className="padding-1">0px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-1: </h4>
              <p className="padding-1">5px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-2: </h4>
              <p className="padding-1">10px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-3: </h4>
              <p className="padding-1">20px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-4: </h4>
              <p className="padding-1">50px</p>
            </div>
            <div className="display-flex">
              <h4 className="fontWeight-lg padding-1">marginBottom-5: </h4>
              <p className="padding-1">100px</p>
            </div>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Opacity</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex flexDirection-column justify-center align-center">
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-10: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-10"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-20: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-20"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-30: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-30"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-40: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-40"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-50: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-50"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-60: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-60"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-70: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-70"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-80: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-80"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">opacity-90: </h4>
            <p className="padding-1 width-1 bg-colorDark opacity-90"></p>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Border</h3>
      <div style={{display: 'none'}}>
      <div className="container display-flex flexDirection-column justify-center align-center">
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-0: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-0"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-1: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-1"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-2: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-2"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-3: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-3"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-4: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-4"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-5: </h4>
            <p className="padding-1 width-1 bg-colorDark borderRadius-5"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-25: </h4>
            <p className="padding-1 width-1 height-1 bg-colorDark borderRadius-25"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderRadius-50: </h4>
            <p className="padding-1 width-1 height-1 bg-colorDark borderRadius-50"></p>
          </div>
          <br />
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-0: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-0 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-1: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-1 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-2: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-2 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-3: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-3 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-4: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-4 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderThickness-5: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderThickness-5 borderColor-colorDark borderStyle-solid"></p>
          </div>
          <br />
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderStyle-dashed: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-dashed borderColor-colorDark"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderStyle-dotted: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-dotted borderColor-colorDark"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderStyle-double: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-double borderColor-colorDark"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderStyle-solid: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-solid borderColor-colorDark"></p>
          </div>
          <br />
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-color1: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-color1 borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-color2: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-color2 borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-color3: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-color3 borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-color4: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-color4 borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorLight: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-colorLight borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorDark: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-solid borderColor-colorDark"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorGrey: </h4>
            <p className="padding-1 width-1 bg-colorLight borderColor-colorGrey borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorRed: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-colorRed borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorBlue: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-colorBlue borderStyle-solid"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorGreen: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderStyle-solid borderColor-colorGreen"></p>
          </div>
          <div className="display-flex margin-1">
            <h4 className="fontWeight-lg padding-1">borderColor-colorYellow: </h4>
            <p className="padding-1 width-1 bg-colorGrey borderColor-colorYellow borderStyle-solid"></p>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Box Shadow</h3>
      <div style={{display: 'none'}}>
        <div className=" container display-flex flexDirection-column justify-center align-center">
          <div className="boxShadow-0 width-1 margin-1">
            <p>boxShadow-0</p>
          </div>
          <div className="boxShadow-1 width-1 margin-1">
            <p>boxShadow-1</p>
          </div>
          <div className="boxShadow-2 width-1 margin-1">
            <p>boxShadow-2</p>
          </div>
          <div className="boxShadow-3 width-1 margin-1">
            <p>boxShadow-3</p>
          </div>
          <div className="boxShadow-4 width-1 margin-1">
            <p>boxShadow-4</p>
          </div>
          <div className="boxShadow-5 width-1 margin-1">
            <p>boxShadow-5</p>
          </div>
          <br />
        </div>

      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Display</h3>
      <div style={{display: 'none'}}>
        <div className="container display-flex justify-space-around">
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>display-none</p>
            <p>display-block</p>
            <p>display-inline</p>
            <p>display-inlineBlock</p>
            <p>display-flex</p>
            <p>display-grid</p>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>flexDirection-row</p>
            <p>flexDirection-column</p>
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Position</h3>
      <div style={{display: 'none'}}>
      <div className="container display-flex justify-space-around">
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>position-relative</p>
            <p>position-absolute</p>
            <p>position-fixed</p>
            <p>position-sticky</p>
            <p>position-static</p>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>position-top0</p>
            <p>position-top1</p>
            <p>position-top2</p>
            <p>position-top3</p>
            <p>position-top4</p>
            <p>position-top5</p>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>position-bottom0</p>
            <p>position-bottom1</p>
            <p>position-bottom2</p>
            <p>position-bottom3</p>
            <p>position-bottom4</p>
            <p>position-bottom5</p>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>position-right0</p>
            <p>position-right1</p>
            <p>position-right2</p>
            <p>position-right3</p>
            <p>position-right4</p>
            <p>position-right5</p>
          </div>
          <div className="display-flex flexDirection-column justify-center align-center">
            <p>position-left0</p>
            <p>position-left1</p>
            <p>position-left2</p>
            <p>position-left3</p>
            <p>position-left4</p>
            <p>position-left5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utilities
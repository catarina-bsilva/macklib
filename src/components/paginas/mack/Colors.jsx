import showToggle from "../../ShowToggle"
import { addClipboardEventListener, removeClipboardEventListener } from "../../clipboard"
import { useEffect } from "react"
const Colors = () => {
  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);

  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Colors</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Text</h3>
      <div style={{display: 'none'}} >
        <p className="padding-2 textAlign-center text-color1 fontSize-md fontWeight-lg"> text-color1</p>
        <p className="padding-2 textAlign-center text-color2 fontSize-md fontWeight-lg"> text-color2</p>
        <p className="padding-2 textAlign-center text-color3 fontSize-md fontWeight-lg"> text-color3</p>
        <p className="padding-2 textAlign-center text-color4 fontSize-md fontWeight-lg"> text-color4</p>
        <p className="padding-2 textAlign-center text-colorLight bg-colorDark width-2 m-a fontSize-md fontWeight-lg"> text-colorLight</p>
        <p className="padding-2 textAlign-center text-colorDark fontSize-md fontWeight-lg"> text-colorDark</p>
        <p className="padding-2 textAlign-center text-colorGrey fontSize-md fontWeight-lg"> text-colorGrey</p>
        <p className="padding-2 textAlign-center text-colorRed fontSize-md fontWeight-lg"> text-colorRed</p>
        <p className="padding-2 textAlign-center text-colorBlue fontSize-md fontWeight-lg"> text-colorBlue</p>
        <p className="padding-2 textAlign-center text-colorYellow fontSize-md fontWeight-lg bg-colorDark width-2 m-a"> text-colorYellow</p>
        <p className="padding-2 textAlign-center text-colorGreen fontSize-md fontWeight-lg"> text-colorGreen</p>
        <p className="padding-2 textAlign-center text-hover-color1 fontSize-md fontWeight-lg"> text-hover-color1</p>
        <p className="padding-2 textAlign-center text-hover-color2 fontSize-md fontWeight-lg"> text-hover-color2</p>
        <p className="padding-2 textAlign-center text-hover-color3 fontSize-md fontWeight-lg"> text-hover-color3</p>
        <p className="padding-2 textAlign-center text-hover-color4 fontSize-md fontWeight-lg"> text-hover-color4</p>
        <p className="padding-2 textAlign-center text-hover-colorLight fontSize-md fontWeight-lg"> text-hover-colorLight</p>
        <p className="padding-2 textAlign-center text-hover-colorDark fontSize-md fontWeight-lg"> text-hover-colorDark</p>
        <p className="padding-2 textAlign-center text-hover-colorGrey fontSize-md fontWeight-lg"> text-hover-colorGrey</p>
        <p className="padding-2 textAlign-center text-hover-colorRed fontSize-md fontWeight-lg"> text-hover-colorRed</p>
        <p className="padding-2 textAlign-center text-hover-colorBlue fontSize-md fontWeight-lg"> text-hover-colorBlue</p>
        <p className="padding-2 textAlign-center text-hover-colorYellow fontSize-md fontWeight-lg "> text-hover-colorYellow</p>
        <p className="padding-2 textAlign-center text-hover-colorGreen fontSize-md fontWeight-lg"> text-hover-colorGreen</p>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Background</h3>
      <div style={{display: 'none'}} >
        <p className="padding-2 textAlign-center text-colorDark bg-color1 fontSize-sm fontWeight-lg width-2 m-a"> bg-color1</p>
        <p className="padding-2 textAlign-center text-colorDark bg-color2 fontSize-sm fontWeight-lg width-2 m-a"> bg-color2</p>
        <p className="padding-2 textAlign-center text-colorDark bg-color3 fontSize-sm fontWeight-lg width-2 m-a"> bg-color3</p>
        <p className="padding-2 textAlign-center text-colorDark bg-color4 fontSize-sm fontWeight-lg width-2 m-a"> bg-color4</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorLight fontSize-sm fontWeight-lg width-2 m-a"> bg-colorLight</p>
        <p className="padding-2 textAlign-center text-colorLight bg-colorDark fontSize-sm fontWeight-lg width-2 m-a"> bg-colorDark</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorGrey fontSize-sm fontWeight-lg width-2 m-a"> bg-colorGrey</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorRed fontSize-sm fontWeight-lg width-2 m-a"> bg-colorRed</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorBlue fontSize-sm fontWeight-lg width-2 m-a"> bg-colorBlue</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorYellow fontSize-sm fontWeight-lg width-2 m-a"> bg-colorYellow</p>
        <p className="padding-2 textAlign-center text-colorDark bg-colorGreen fontSize-sm fontWeight-lg width-2 m-a"> bg-colorGreen</p>
        <div className="container100">
          <br />
          <span className="fontSize-xs bg-color1-light-1 width-2 padding-2 margin-1">bg-color1-light-1</span>
          <span className="fontSize-xs bg-color2-light-1 width-2 padding-2 margin-1">bg-color2-light-1</span>
          <span className="fontSize-xs bg-color3-light-1 width-2 padding-2 margin-1">bg-color3-light-1</span>
          <span className="fontSize-xs bg-color4-light-1 width-2 padding-2 margin-1">bg-color4-light-1</span>
          <span className="fontSize-xs bg-colorRed-light-1 width-2 padding-2 margin-1">bg-colorRed-light-1</span>
          <span className="fontSize-xs bg-colorBlue-light-1 width-2 padding-2 margin-1">bg-colorBlue-light-1</span>
          <span className="fontSize-xs bg-colorYellow-light-1 width-2 padding-2 margin-1">bg-colorYellow-light-1</span>
          <span className="fontSize-xs bg-colorGreen-light-1 width-2 padding-2 margin-1">bg-colorGreen-light-1</span>
          <span className="fontSize-xs bg-colorGrey-light-1 width-2 padding-2 margin-1">bg-colorGrey-light-1</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-2 width-2 padding-2 margin-1">bg-color1-light-2</span>
          <span className="fontSize-xs bg-color2-light-2 width-2 padding-2 margin-1">bg-color2-light-2</span>
          <span className="fontSize-xs bg-color3-light-2 width-2 padding-2 margin-1">bg-color3-light-2</span>
          <span className="fontSize-xs bg-color4-light-2 width-2 padding-2 margin-1">bg-color4-light-2</span>
          <span className="fontSize-xs bg-colorRed-light-2 width-2 padding-2 margin-1">bg-colorRed-light-2</span>
          <span className="fontSize-xs bg-colorBlue-light-2 width-2 padding-2 margin-1">bg-colorBlue-light-2</span>
          <span className="fontSize-xs bg-colorYellow-light-2 width-2 padding-2 margin-1">bg-colorYellow-light-2</span>
          <span className="fontSize-xs bg-colorGreen-light-2 width-2 padding-2 margin-1">bg-colorGreen-light-2</span>
          <span className="fontSize-xs bg-colorGrey-light-2 width-2 padding-2 margin-1">bg-colorGrey-light-2</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-3 width-2 padding-2 margin-1">bg-color1-light-3</span>
          <span className="fontSize-xs bg-color2-light-3 width-2 padding-2 margin-1">bg-color2-light-3</span>
          <span className="fontSize-xs bg-color3-light-3 width-2 padding-2 margin-1">bg-color3-light-3</span>
          <span className="fontSize-xs bg-color4-light-3 width-2 padding-2 margin-1">bg-color4-light-3</span>
          <span className="fontSize-xs bg-colorRed-light-3 width-2 padding-2 margin-1">bg-colorRed-light-3</span>
          <span className="fontSize-xs bg-colorBlue-light-3 width-2 padding-2 margin-1">bg-colorBlue-light-3</span>
          <span className="fontSize-xs bg-colorYellow-light-3 width-2 padding-2 margin-1">bg-colorYellow-light-3</span>
          <span className="fontSize-xs bg-colorGreen-light-3 width-2 padding-2 margin-1">bg-colorGreen-light-3</span>
          <span className="fontSize-xs bg-colorGrey-light-3 width-2 padding-2 margin-1">bg-colorGrey-light-3</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-4 width-2 padding-2 margin-1">bg-color1-light-4</span>
          <span className="fontSize-xs bg-color2-light-4 width-2 padding-2 margin-1">bg-color2-light-4</span>
          <span className="fontSize-xs bg-color3-light-4 width-2 padding-2 margin-1">bg-color3-light-4</span>
          <span className="fontSize-xs bg-color4-light-4 width-2 padding-2 margin-1">bg-color4-light-4</span>
          <span className="fontSize-xs bg-colorRed-light-4 width-2 padding-2 margin-1">bg-colorRed-light-4</span>
          <span className="fontSize-xs bg-colorBlue-light-4 width-2 padding-2 margin-1">bg-colorBlue-light-4</span>
          <span className="fontSize-xs bg-colorYellow-light-4 width-2 padding-2 margin-1">bg-colorYellow-light-4</span>
          <span className="fontSize-xs bg-colorGreen-light-4 width-2 padding-2 margin-1">bg-colorGreen-light-4</span>
          <span className="fontSize-xs bg-colorGrey-light-4 width-2 padding-2 margin-1">bg-colorGrey-light-4</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-5 width-2 padding-2 margin-1">bg-color1-light-5</span>
          <span className="fontSize-xs bg-color2-light-5 width-2 padding-2 margin-1">bg-color2-light-5</span>
          <span className="fontSize-xs bg-color3-light-5 width-2 padding-2 margin-1">bg-color3-light-5</span>
          <span className="fontSize-xs bg-color4-light-5 width-2 padding-2 margin-1">bg-color4-light-5</span>
          <span className="fontSize-xs bg-colorRed-light-5 width-2 padding-2 margin-1">bg-colorRed-light-5</span>
          <span className="fontSize-xs bg-colorBlue-light-5 width-2 padding-2 margin-1">bg-colorBlue-light-5</span>
          <span className="fontSize-xs bg-colorYellow-light-5 width-2 padding-2 margin-1">bg-colorYellow-light-5</span>
          <span className="fontSize-xs bg-colorGreen-light-5 width-2 padding-2 margin-1">bg-colorGreen-light-5</span>
          <span className="fontSize-xs bg-colorGrey-light-5 width-2 padding-2 margin-1">bg-colorGrey-light-5</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-6 width-2 padding-2 margin-1">bg-color1-light-6</span>
          <span className="fontSize-xs bg-color2-light-6 width-2 padding-2 margin-1">bg-color2-light-6</span>
          <span className="fontSize-xs bg-color3-light-6 width-2 padding-2 margin-1">bg-color3-light-6</span>
          <span className="fontSize-xs bg-color4-light-6 width-2 padding-2 margin-1">bg-color4-light-6</span>
          <span className="fontSize-xs bg-colorRed-light-6 width-2 padding-2 margin-1">bg-colorRed-light-6</span>
          <span className="fontSize-xs bg-colorBlue-light-6 width-2 padding-2 margin-1">bg-colorBlue-light-6</span>
          <span className="fontSize-xs bg-colorYellow-light-6 width-2 padding-2 margin-1">bg-colorYellow-light-6</span>
          <span className="fontSize-xs bg-colorGreen-light-6 width-2 padding-2 margin-1">bg-colorGreen-light-6</span>
          <span className="fontSize-xs bg-colorGrey-light-6 width-2 padding-2 margin-1">bg-colorGrey-light-6</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-7 width-2 padding-2 margin-1">bg-color1-light-7</span>
          <span className="fontSize-xs bg-color2-light-7 width-2 padding-2 margin-1">bg-color2-light-7</span>
          <span className="fontSize-xs bg-color3-light-7 width-2 padding-2 margin-1">bg-color3-light-7</span>
          <span className="fontSize-xs bg-color4-light-7 width-2 padding-2 margin-1">bg-color4-light-7</span>
          <span className="fontSize-xs bg-colorRed-light-7 width-2 padding-2 margin-1">bg-colorRed-light-7</span>
          <span className="fontSize-xs bg-colorBlue-light-7 width-2 padding-2 margin-1">bg-colorBlue-light-7</span>
          <span className="fontSize-xs bg-colorYellow-light-7 width-2 padding-2 margin-1">bg-colorYellow-light-7</span>
          <span className="fontSize-xs bg-colorGreen-light-7 width-2 padding-2 margin-1">bg-colorGreen-light-7</span>
          <span className="fontSize-xs bg-colorGrey-light-7 width-2 padding-2 margin-1">bg-colorGrey-light-7</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-8 width-2 padding-2 margin-1">bg-color1-light-8</span>
          <span className="fontSize-xs bg-color2-light-8 width-2 padding-2 margin-1">bg-color2-light-8</span>
          <span className="fontSize-xs bg-color3-light-8 width-2 padding-2 margin-1">bg-color3-light-8</span>
          <span className="fontSize-xs bg-color4-light-8 width-2 padding-2 margin-1">bg-color4-light-8</span>
          <span className="fontSize-xs bg-colorRed-light-8 width-2 padding-2 margin-1">bg-colorRed-light-8</span>
          <span className="fontSize-xs bg-colorBlue-light-8 width-2 padding-2 margin-1">bg-colorBlue-light-8</span>
          <span className="fontSize-xs bg-colorYellow-light-8 width-2 padding-2 margin-1">bg-colorYellow-light-8</span>
          <span className="fontSize-xs bg-colorGreen-light-8 width-2 padding-2 margin-1">bg-colorGreen-light-8</span>
          <span className="fontSize-xs bg-colorGrey-light-8 width-2 padding-2 margin-1">bg-colorGrey-light-8</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-light-9 width-2 padding-2 margin-1">bg-color1-light-9</span>
          <span className="fontSize-xs bg-color2-light-9 width-2 padding-2 margin-1">bg-color2-light-9</span>
          <span className="fontSize-xs bg-color3-light-9 width-2 padding-2 margin-1">bg-color3-light-9</span>
          <span className="fontSize-xs bg-color4-light-9 width-2 padding-2 margin-1">bg-color4-light-9</span>
          <span className="fontSize-xs bg-colorRed-light-9 width-2 padding-2 margin-1">bg-colorRed-light-9</span>
          <span className="fontSize-xs bg-colorBlue-light-9 width-2 padding-2 margin-1">bg-colorBlue-light-9</span>
          <span className="fontSize-xs bg-colorYellow-light-9 width-2 padding-2 margin-1">bg-colorYellow-light-9</span>
          <span className="fontSize-xs bg-colorGreen-light-9 width-2 padding-2 margin-1">bg-colorGreen-light-9</span>
          <span className="fontSize-xs bg-colorGrey-light-9 width-2 padding-2 margin-1">bg-colorGrey-light-9</span>
          <br />
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-1 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-1</span>
          <span className="fontSize-xs bg-color2-dark-1 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-1</span>
          <span className="fontSize-xs bg-color3-dark-1 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-1</span>
          <span className="fontSize-xs bg-color4-dark-1 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-1</span>
          <span className="fontSize-xs bg-colorRed-dark-1 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-1</span>
          <span className="fontSize-xs bg-colorBlue-dark-1 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-1</span>
          <span className="fontSize-xs bg-colorYellow-dark-1 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-1</span>
          <span className="fontSize-xs bg-colorGreen-dark-1 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-1</span>
          <span className="fontSize-xs bg-colorGrey-dark-1 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-1</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-2 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-2</span>
          <span className="fontSize-xs bg-color2-dark-2 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-2</span>
          <span className="fontSize-xs bg-color3-dark-2 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-2</span>
          <span className="fontSize-xs bg-color4-dark-2 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-2</span>
          <span className="fontSize-xs bg-colorRed-dark-2 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-2</span>
          <span className="fontSize-xs bg-colorBlue-dark-2 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-2</span>
          <span className="fontSize-xs bg-colorYellow-dark-2 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-2</span>
          <span className="fontSize-xs bg-colorGreen-dark-2 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-2</span>
          <span className="fontSize-xs bg-colorGrey-dark-2 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-2</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-3 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-3</span>
          <span className="fontSize-xs bg-color2-dark-3 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-3</span>
          <span className="fontSize-xs bg-color3-dark-3 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-3</span>
          <span className="fontSize-xs bg-color4-dark-3 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-3</span>
          <span className="fontSize-xs bg-colorRed-dark-3 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-3</span>
          <span className="fontSize-xs bg-colorBlue-dark-3 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-3</span>
          <span className="fontSize-xs bg-colorYellow-dark-3 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-3</span>
          <span className="fontSize-xs bg-colorGreen-dark-3 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-3</span>
          <span className="fontSize-xs bg-colorGrey-dark-3 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-3</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-4 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-4</span>
          <span className="fontSize-xs bg-color2-dark-4 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-4</span>
          <span className="fontSize-xs bg-color3-dark-4 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-4</span>
          <span className="fontSize-xs bg-color4-dark-4 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-4</span>
          <span className="fontSize-xs bg-colorRed-dark-4 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-4</span>
          <span className="fontSize-xs bg-colorBlue-dark-4 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-4</span>
          <span className="fontSize-xs bg-colorYellow-dark-4 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-4</span>
          <span className="fontSize-xs bg-colorGreen-dark-4 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-4</span>
          <span className="fontSize-xs bg-colorGrey-dark-4 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-4</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-5 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-5</span>
          <span className="fontSize-xs bg-color2-dark-5 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-5</span>
          <span className="fontSize-xs bg-color3-dark-5 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-5</span>
          <span className="fontSize-xs bg-color4-dark-5 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-5</span>
          <span className="fontSize-xs bg-colorRed-dark-5 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-5</span>
          <span className="fontSize-xs bg-colorBlue-dark-5 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-5</span>
          <span className="fontSize-xs bg-colorYellow-dark-5 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-5</span>
          <span className="fontSize-xs bg-colorGreen-dark-5 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-5</span>
          <span className="fontSize-xs bg-colorGrey-dark-5 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-5</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-6 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-6</span>
          <span className="fontSize-xs bg-color2-dark-6 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-6</span>
          <span className="fontSize-xs bg-color3-dark-6 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-6</span>
          <span className="fontSize-xs bg-color4-dark-6 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-6</span>
          <span className="fontSize-xs bg-colorRed-dark-6 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-6</span>
          <span className="fontSize-xs bg-colorBlue-dark-6 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-6</span>
          <span className="fontSize-xs bg-colorYellow-dark-6 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-6</span>
          <span className="fontSize-xs bg-colorGreen-dark-6 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-6</span>
          <span className="fontSize-xs bg-colorGrey-dark-6 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-6</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-7 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-7</span>
          <span className="fontSize-xs bg-color2-dark-7 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-7</span>
          <span className="fontSize-xs bg-color3-dark-7 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-7</span>
          <span className="fontSize-xs bg-color4-dark-7 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-7</span>
          <span className="fontSize-xs bg-colorRed-dark-7 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-7</span>
          <span className="fontSize-xs bg-colorBlue-dark-7 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-7</span>
          <span className="fontSize-xs bg-colorYellow-dark-7 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-7</span>
          <span className="fontSize-xs bg-colorGreen-dark-7 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-7</span>
          <span className="fontSize-xs bg-colorGrey-dark-7 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-7</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-8 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-8</span>
          <span className="fontSize-xs bg-color2-dark-8 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-8</span>
          <span className="fontSize-xs bg-color3-dark-8 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-8</span>
          <span className="fontSize-xs bg-color4-dark-8 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-8</span>
          <span className="fontSize-xs bg-colorRed-dark-8 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-8</span>
          <span className="fontSize-xs bg-colorBlue-dark-8 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-8</span>
          <span className="fontSize-xs bg-colorYellow-dark-8 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-8</span>
          <span className="fontSize-xs bg-colorGreen-dark-8 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-8</span>
          <span className="fontSize-xs bg-colorGrey-dark-8 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-8</span>
          <br />
          <br />
          <span className="fontSize-xs bg-color1-dark-9 text-colorLight width-2 padding-2 margin-1">bg-color1-dark-9</span>
          <span className="fontSize-xs bg-color2-dark-9 text-colorLight width-2 padding-2 margin-1">bg-color2-dark-9</span>
          <span className="fontSize-xs bg-color3-dark-9 text-colorLight width-2 padding-2 margin-1">bg-color3-dark-9</span>
          <span className="fontSize-xs bg-color4-dark-9 text-colorLight width-2 padding-2 margin-1">bg-color4-dark-9</span>
          <span className="fontSize-xs bg-colorRed-dark-9 text-colorLight width-2 padding-2 margin-1">bg-colorRed-dark-9</span>
          <span className="fontSize-xs bg-colorBlue-dark-9 text-colorLight width-2 padding-2 margin-1">bg-colorBlue-dark-9</span>
          <span className="fontSize-xs bg-colorYellow-dark-9 text-colorLight width-2 padding-2 margin-1">bg-colorYellow-dark-9</span>
          <span className="fontSize-xs bg-colorGreen-dark-9 text-colorLight width-2 padding-2 margin-1">bg-colorGreen-dark-9</span>
          <span className="fontSize-xs bg-colorGrey-dark-9 text-colorLight width-2 padding-2 margin-1">bg-colorGrey-dark-9</span>
          <br />
          <br />
        </div>
        
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Gradient</h3>
      <div style={{display: 'none'}}>
      <div className="container display-flex flexDirection-column justify-center align-center">
        <div className="width-3 grad-color1-color2-linear textAlign-center margin-1 padding-1">
          grad-color1-color2-linear
        </div>
        <div className="width-3 grad-color1-color2-color3-linear  textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-linear 
        </div>
        <div className="width-3 grad-color1-color2-color3-color4-linear textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-color4-linear
        </div>
        <div className="width-3 grad-color1-color2-color4-linear textAlign-center margin-1 padding-1">
          grad-color1-color2-color4-linear
        </div>
        <div className="width-3 grad-color1-color3-linear textAlign-center margin-1 padding-1">
          grad-color1-color3-linear
        </div>
        <div className="width-3 grad-color1-color3-color4-linear textAlign-center margin-1 padding-1">
          grad-color1-color3-color4-linear
        </div>
        <div className="width-3 grad-color1-color4-linear textAlign-center margin-1 padding-1">
          grad-color1-color4-linear
        </div>
        <div className="width-3 grad-color2-color3-linear textAlign-center margin-1 padding-1">
          grad-color2-color3-linear
        </div>
        <div className="width-3 grad-color2-color3-color4-linear textAlign-center margin-1 padding-1">
          grad-color2-color3-color4-linear
        </div>
        <div className="width-3 grad-color2-color4-linear textAlign-center margin-1 padding-1">
          grad-color2-color4-linear
        </div>
        <div className="width-3 grad-color3-color4-linear textAlign-center margin-1 padding-1">
          grad-color3-color4-linear
        </div>
        <br />
        <div className="width-3 grad-color1-color2-radial textAlign-center margin-1 padding-1">
          grad-color1-color2-radial
        </div>
        <div className="width-3 grad-color1-color2-color3-radial  textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-radial 
        </div>
        <div className="width-3 grad-color1-color2-color3-color4-radial textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-color4-radial
        </div>
        <div className="width-3 grad-color1-color2-color4-radial textAlign-center margin-1 padding-1">
          grad-color1-color2-color4-radial
        </div>
        <div className="width-3 grad-color1-color3-radial textAlign-center margin-1 padding-1">
          grad-color1-color3-radial
        </div>
        <div className="width-3 grad-color1-color3-color4-radial textAlign-center margin-1 padding-1">
          grad-color1-color3-color4-radial
        </div>
        <div className="width-3 grad-color1-color4-radial textAlign-center margin-1 padding-1">
          grad-color1-color4-radial
        </div>
        <div className="width-3 grad-color2-color3-radial textAlign-center margin-1 padding-1">
          grad-color2-color3-radial
        </div>
        <div className="width-3 grad-color2-color3-color4-radial textAlign-center margin-1 padding-1">
          grad-color2-color3-color4-radial
        </div>
        <div className="width-3 grad-color2-color4-radial textAlign-center margin-1 padding-1">
          grad-color2-color4-radial
        </div>
        <div className="width-3 grad-color3-color4-radial textAlign-center margin-1 padding-1">
          grad-color3-color4-radial
        </div>
        <br />
        <div className="width-3 height-1 grad-color1-color2-conic textAlign-center margin-1 padding-1">
          grad-color1-color2-conic
        </div>
        <div className="width-3 height-1 grad-color1-color2-color3-conic  textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-conic 
        </div>
        <div className="width-3 height-1 grad-color1-color2-color3-color4-conic textAlign-center margin-1 padding-1">
          grad-color1-color2-color3-color4-conic
        </div>
        <div className="width-3 height-1 grad-color1-color2-color4-conic textAlign-center margin-1 padding-1">
          grad-color1-color2-color4-conic
        </div>
        <div className="width-3 height-1 grad-color1-color3-conic textAlign-center margin-1 padding-1">
          grad-color1-color3-conic
        </div>
        <div className="width-3 height-1 grad-color1-color3-color4-conic textAlign-center margin-1 padding-1">
          grad-color1-color3-color4-conic
        </div>
        <div className="width-3 height-1 grad-color1-color4-conic textAlign-center margin-1 padding-1">
          grad-color1-color4-conic
        </div>
        <div className="width-3 height-1 grad-color2-color3-conic textAlign-center margin-1 padding-1">
          grad-color2-color3-conic
        </div>
        <div className="width-3 height-1 grad-color2-color3-color4-conic textAlign-center margin-1 padding-1">
          grad-color2-color3-color4-conic
        </div>
        <div className="width-3 height-1 grad-color2-color4-conic textAlign-center margin-1 padding-1">
          grad-color2-color4-conic
        </div>
        <div className="width-3 height-1 grad-color3-color4-conic textAlign-center margin-1 padding-1">
          grad-color3-color4-conic
        </div>
        <br />
      </div>
      </div>
    </div>
  )
}

export default Colors
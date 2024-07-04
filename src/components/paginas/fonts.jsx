import bd from '../../assets/bd.json'
import showToggle from "../ShowToggle"
import { addClipboardEventListener, removeClipboardEventListener } from '../clipboard'
import { useEffect } from 'react';

const Fonts = () => {
    useEffect(() => {
        addClipboardEventListener();
    
        return () => {
          removeClipboardEventListener();
        };
      }, []); 
  return (
    <div className='container'>
        <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Fonts</h2>
        {bd.fonts.map((category, categoryIndex)=>(
            <div key={categoryIndex}>
                {Object.keys(category).map((key, keyIndex) => (
                    <div key={keyIndex}>
                        <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">{key}</h3>
                        <div style={{display: 'none'}}>
                            <ul>
                                {category[key].map((font,fontIndex) => (
                                    <li key={fontIndex} className='padding-2 textAlign-center' style={{fontFamily: font}}>
                                        <span>{font}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Fonts
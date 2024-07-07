import bd from '../../assets/bd.json'
import showToggle from "../ShowToggle"
import { addClipboardEventListener, removeClipboardEventListener } from '../clipboard'
import { useEffect } from "react"
const Paletes = () => {
    useEffect(() => {
        addClipboardEventListener();
  
        return () => {
          removeClipboardEventListener();
        };
      }, []);  
  return (
    <div className='container'>
        <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Paletes</h2>
        {bd.paletes.map((category, categoryIndex)=>(
            <div key={categoryIndex}>
                {Object.keys(category).map((key, keyIndex) => (
                    <div key={keyIndex}>
                        <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">Font {key}</h3>
                        <div style={{display: 'none'}}>
                            <ul>
                                {category[key].map((colorArray,colorIndex) => (
                                    <li key={colorIndex} className=' m-a margin-1 textAlign-center'>
                                        {colorArray.map((color, subColorIndex) => (
                                            <span key={subColorIndex} style={{ backgroundColor: color, padding: '5px', margin: '2px', display: 'inline-block' }}>{color}</span>
                                        ))}
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

export default Paletes
import bd from '../../assets/bd.json'
import { addClipboardEventListener, removeClipboardEventListener } from '../clipboard'
import { useEffect } from 'react';

const Colors = () => {
  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []); 
  return (    
    <div>
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Colors</h2>
        {bd.colors.map((cor, index) => (
            <ul key={index}>
                <li className='width-2 m-a margin-1 padding-1 textAlign-center' style={{ backgroundColor: cor }}><span className='bg-colorGrey-light-7 '>{cor}</span></li>
            </ul>
        ))}
    </div>
  )
}

export default Colors
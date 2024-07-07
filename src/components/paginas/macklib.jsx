import { Link } from "react-router-dom"
import { addClipboardEventListener, removeClipboardEventListener } from '../clipboard'
import { useEffect } from "react"
const Macklib = () => {
  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);
  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Library</h2>
        <h3 className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-3 padding-2 pointer">
          <Link to="/library/colors" >Colors</Link>
        </h3>
        <h3 className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-3 padding-2 pointer">
          <Link to="/library/components">Components</Link>
        </h3>
        <h3 className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-3 padding-2 pointer">
          <Link to="/library/grid">Grid</Link>
        </h3>
        <h3 className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-3 padding-2 pointer">
          <Link to="/library/text">Text</Link>
        </h3>
        <h3 className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-3 padding-2 pointer">
          <Link to="/library/utilities">Utilities</Link>
        </h3>
    </div>
  )
}

export default Macklib
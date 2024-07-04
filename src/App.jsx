  import { addClipboardEventListener, removeClipboardEventListener } from './components/clipboard'
  import { useEffect } from "react"
  import macklib from '../src/assets/macklib.zip'
  function App() {

    useEffect(() => {
      addClipboardEventListener();

      return () => {
        removeClipboardEventListener();
      };
    }, []);

    return (
      <div className="container">
        <button style={{marginTop: '30vh', padding:'25px'}}className='btn-lg btn-color3 fontSize-md'><a href={macklib} download>Download library Macklib</a> </button>
      </div>
    )
  }

  export default App

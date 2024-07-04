import { addClipboardEventListener, removeClipboardEventListener } from './components/clipboard'
import { useEffect } from "react"
import macklib from "../public/mackllib.zip"
function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = macklib;
    link.download = 'macklib.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    addClipboardEventListener();

    return () => {
      removeClipboardEventListener();
    };
  }, []);

  return (
    <div className="container">
      <button style={{marginTop: '30vh', padding:'25px'}}className='btn-lg btn-color3 fontSize-md' onClick={handleDownload}>Download library Macklib</button>
    </div>
  )
}

export default App

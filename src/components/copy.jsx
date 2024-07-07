import { FiCopy } from 'react-icons/fi';
import copyToClipboard from "./clipboard"

const CopyableText = () => {
  const handleClick = (event) => {
    const parentElement = event.target.parentElement;
    const text = parentElement.innerText || parentElement.textContent;
    copyToClipboard(text);
  };

  return <FiCopy className="pointer" onClick={handleClick} />;
};

export default CopyableText;
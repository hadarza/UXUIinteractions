import React,{createRef,useState} from 'react'
import * as htmlToImage from 'html-to-image';
import FileSaver from 'file-saver';
import { images } from '../../../constants';
const DownloadSignature = () => {
    const ref = createRef(null);
    const [nameUser,setName] = useState("");

    function filterNode(node) {
      if (node instanceof Text) {
          return true;
      }
      return [
          "div",
          "span",
          "p",
          "i",
          "strong",
          "main",
          "aside",
          "article",
          "pre",
          "code",
          "time",
          "address",
          "header",
          "footer"
      ].includes(node.tagName.toLowerCase()) || /^h[123456]$/i.test(node.tagName);
  }
    const download = () => {
    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    htmlToImage.toBlob(document.getElementById('photo'),{
      style: {
        position: "static",
        filter: filterNode
      }
    })
    .then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'my-node.png');
      } else {
       FileSaver.saveAs(blob, 'my-node.png');
     }
    });
    }

    
  return (

<>
    <div id="photo"
        className="signature">
        <h6 className='info'>GeeksforGeeks</h6>
        <img  style={{width:"1rem",height:"1rem"}} src={images.arrow}/>
        <h4>
        Hello everyone!
       <input value={nameUser} size={nameUser.length + 2} readOnly/>
        </h4>
  
    
    </div>
        <button className='screenshot' onClick={download}>
         screenshot
        </button>
        <input value={nameUser}  onChange={event =>setName(event.target.value)}/>
</>
    )
}

export default DownloadSignature
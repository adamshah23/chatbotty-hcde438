import "./TextInput.css"
import { useState } from "react";
import { FiSend, FiCamera } from 'react-icons/fi'

function InputText(props) {
    const [text, enterMsg] = useState("")

    function send() {
        props.sendMessage(text);
        enterMsg("");
      }
      function onKeyPress(e) {
        if (e.key === "Enter") {
          send();
        }
      }
    
      // added funtionality of a camera
      return (
        <footer className="footer">
         <button onClick={props.showCamera}
            style={{left:10, right:'auto'}}>
            <FiCamera style={{height:15, width:15}} />
        </button>
         
          <input
            className="text-input"
            value={text}
            onChange={(e) => enterMsg(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <button className="send" onClick={send}>
            ↑
          </button>
        </footer>
      );
    }

export default InputText
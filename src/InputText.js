import "./TextInput.css"
import { useState } from "react";

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
    
      return (
        <footer className="footer">
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
import "./NamePicker.css"
import { useState } from "react";
import { FiEdit, FiCheck } from 'react-icons/fi'


//code to create a username for chatting
function NamePicker(props) {

    const [editName, setEditName] = useState(false) 
    const [name, setName] = useState("")

    //this sets the username and saves it
    function send() {
        props.setUsername(name)
        setEditName(false)
        localStorage.setItem("username", name)
      }


    if(editName) {
        return (
            <div className="name-picker">
             
             <input className="name-picker-input"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={e => {if(e.key ===  'Enter') send()}}
              />
             
             <button onClick={send}>
                <FiCheck style={{height:15, width:15}} />
             </button>
    
            </div>
          );

    } else {
        return (
            <div className="name-picker">
              <span className="name-picker-name">{name || "Set Username: "}</span>
              <FiEdit size="24" onClick={() => setEditName(true)} />
            </div>
          );


    }

}

export default NamePicker
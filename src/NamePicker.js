import "./NamePicker.css"
import { useState } from "react";
import { FiEdit, FiCheck } from 'react-icons/fi'

function NamePicker(props) {

    const [editName, setEditName] = useState(false)
    const [name, setName] = useState("")

    function send() {
        props.saveName(name)
        setEditName(false)
        localStorage.setItem("username", name)
      }


    if(editName) {
        return (
            <div className="change-user">
             
             <input
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
            <div className="change-user">
             <button onClick={() => setEditName(true)}
                style={{right:10}}>
                <FiEdit style={{height:15, width:15}} />
             </button>
    
            </div>
          );


    }

}

export default NamePicker
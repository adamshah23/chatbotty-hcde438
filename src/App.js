import "./App.css";
import "./NamePicker.css"
import TextInput from "./InputText";
import { useState } from "react";
import Message from "./Messages";
import { use100vh } from "react-div-100vh";
import Camera from 'react-snap-pic'
import NamePicker from "./NamePicker";



function App() {
  const height = use100vh();

  const [showCamera, setShowCamera] = useState(false)
  const [messages, setText] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username") || "") // to add the component of setting a specific user name

  function sendMessage(text) {
    if (!text) return;
    
    const newMessage = {
      text,
      time: Date.now(),
      user: username,
    };

    setText([newMessage, ...messages]);
  }

  //using props and states to take a picture
  function takePicture (img) {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App"  style={{ height: height, minHeight: height, maxHeight: height }} >

      <div className="camera"> {showCamera && <Camera takePicture = {takePicture} />} </div>

      <header className="header">
        <div className="logo" />
        <span className="title">chatbotty!</span>
        <NamePicker setUsername = {setUsername}/>
      </header>

      <div className="messages">
        {messages.map((msg, i) => {return <Message {...msg} isUser = {msg.user === username} key={i} />})}
      </div>

      <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>

    </div>
  );
}

export default App;

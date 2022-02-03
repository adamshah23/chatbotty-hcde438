import "./App.css";
import TextInput from "./InputText";
import { useState } from "react";
import Message from "./Messages";
import { use100vh } from "react-div-100vh";
import Camera from 'react-snap-pic'

function App() {
  const height = use100vh();

  const [showCamera, setShowCamera] = useState(false)
  const [messages, setText] = useState([]);
  function sendMessage(text) {
    if (!text) return;
    
    const newMessage = {
      text,
      //try more
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
      </header>
      <div className="messages">
        {messages.map((msg) => { return <Message {...msg} />;})}
      </div>
      <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;

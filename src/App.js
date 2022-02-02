import "./App.css";
import TextInput from "./InputText";
import { useState } from "react";
import Message from "./Messages";
//import { use100vh } from "react-div-100vh";
//import { FiSend, FiCamera } from 'react-icons/fi'

function App() {
  //const height = use100vh();

  const [messages, setText] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      //try more
    };
    setText([newMessage, ...messages]);
  }
  return (
    <div className="App"  /*style={{ height: height, minHeight: height, maxHeight: height }} */>
      <header className="header">
        <div className="logo" />
        <span className="title">chatbotty!</span>
      </header>
      <div className="messages">
        {messages.map((msg) => { return <Message {...msg} />;})}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;

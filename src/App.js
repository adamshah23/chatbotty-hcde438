import './App.css';

/* Basic function that takes a structured html to help layoput the react page */
function App() {
  return (
    <div className="App">  
      <header className="header">
        <div className="logo"/>
        <span className="title">chatbotty</span>
      </header>
      <div className="text-block1">
        Helloo!
      </div>
      <div className="text-block1"> 
        Hi, what time is it botty??
      </div>
      <div className="text-block1">
        Its 5:32pm PST! :)
      </div>
      <footer className='footer'> 
        <input className="text-input"/>
        <button className="button">⬆</button>
      </footer>
    </div>
  );
}

export default App;

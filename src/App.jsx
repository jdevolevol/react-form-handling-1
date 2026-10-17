import {useState} from 'react';
import "./App.css";

function App() {
  const [message,setMessage] = useState("Greeting Message");
  const [inputMessage,setInputMessage] = useState("");
  

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text"  
        onChange={(event)=>{ setInputMessage(event.target.value)}}/>
      </div>

      <div className="buttons">
        <button onClick={(event)=>{setMessage(inputMessage);}}>Update text</button>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
    const [text, setText] = useState("Song")
    return (
        <div className="App">
            <h1>Hello {text}</h1>
            <input onChange={
                e => setText(e.currentTarget.value)
            }/>
            <button type={"submit"}>Submit</button>
        </div>
    );
}

export default App;

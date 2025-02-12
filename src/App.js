import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import ReactPlayer from "react-player/youtube";

function App() {
    const [text, setText] = useState("Song")
    return (
        <div className="App">
            <h1>Hello {text}</h1>
            <input onChange={
                e => setText(e.currentTarget.value)
            }/>
            <button type={"submit"}>Submit</button>
            <ReactPlayer url="https://www.youtube.com/watch?v=I3OJUwILelU" controls={true} />
        </div>
    );
}

export default App;

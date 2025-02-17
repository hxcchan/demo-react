import smile from './assets/smile.jpg';
import {useState} from "react";
import './App.css';
import ReactPlayer from "react-player/youtube";
import BirdSounds from "./BirdSounds";

function App() {
    const [text, setText] = useState("Song")
    return (
        <div className="App">
            <h1>Hello {text}</h1>
            <input onChange={
                e => setText(e.currentTarget.value)
            }/>
            <button type={"submit"}>Submit</button>
            <img  height={200} src={smile} alt="smile" />
            <ReactPlayer url="https://www.youtube.com/watch?v=I3OJUwILelU" controls={true} playing={false} volume={0.1}/>
            <BirdSounds />
        </div>
    );
}

export default App;

import React, {useState, useEffect} from "react";

import HiddenLetters from './components/HiddenLetters';
import Keyboard from './components/Keyboard';
import "./App.scss";

function App() {
    const [word, setWord] = useState('crybaby');

    useEffect(() => {
        wordFetcher();
    })

    const wordSpreader = () => {
       return word.split('').map(char => <HiddenLetters letter={char} />)
    }

    const wordFetcher = () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://wordsapiv1.p.rapidapi.com/words?random=true",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key":
                        process.env.SECRET_KEY,
                },
            }
        )
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    return (
        <div className="App">
            <div className="title">Word Play</div>
            <button onClick={() => wordFetcher()}>Get a word</button>

            <p>Category: Babies</p>
            <div className='secret-word'>{wordSpreader()}</div>
            <Keyboard />
        </div>
    );
}

export default App;

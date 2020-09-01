import React, {useState, useEffect} from "react";

import HiddenLetters from './components/HiddenLetters';
import Keyboard from './components/Keyboard';
import "./App.scss";

function App() {
    const [wordToGuess, setWordToGuess] = useState('crybaby');
    const [inputWord, setInputWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);

    const wordSpreader = () => {
       return wordToGuess.split('').map(char => <HiddenLetters letter=' ' />)
    }

    const wordFetcher = () => {
        fetch(
            `http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_SECRET_KEY}`,
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

import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
    const [word, setWord] = useState('crybaby');

    useEffect(() => {
        wordFetcher();
    })

    const wordSpreader = () => {
        for (let char of word) {
            return <div>{char}</div>
        }
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
            <h1>{wordSpreader()}</h1>
            <h2>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h2>
        </div>
    );
}

export default App;

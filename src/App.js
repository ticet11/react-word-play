import React from "react";
import "./App.css";

function App() {
    const wordFetcher = () => {
        fetch(
            "https://wordsapiv1.p.rapidapi.com/words/car/hasParts",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "26d1cf4addmshb8df00201b9e71fp1944aejsn916d0e59f160",
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
        </div>
    );
}

export default App;

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

            <p>Category: Babies</p>
            <h1>_ _ _ _ _ B _</h1>
            <h2>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h2>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from "react"
import Character from "./components/Character";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCharacters();
    setTimeout(() => setShowSubscribe(true), 10000)
  }, []);

  const fetchCharacters = async _ => {
    const response = await fetch("https://demoapi.com/api/series/howimetyourmother");
    const responseJson = await response.json();

    setCharacters(responseJson);
    setLoading(false);
  }

  return (
    <div>
      <h1>Series Api</h1>

      <div className="characters">
        {loading ? <LoadingMask /> : characters.map((character, key) => <Character name={character.name} details={character.details} key={key} />)}
      </div>

      {showSubscribe ? <Subscription /> : null}
    </div>
  )
}

export default App

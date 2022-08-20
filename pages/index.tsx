import React, { useState } from "react";
import { uuid } from "uuidv4";
import generateNewName from "../lib/silben";
import { useFavoriteNames, Name } from "../lib/useFavoriteNames";

export default function Home() {
  const defaultName: Name = {
    vorsilbe: "Neuer ",
    nachsilbe: "Name",
    id: uuid(),
  };
  const [generatedName, setGeneratedName] = useState<Name>(defaultName);
  const [favoriteNames, addFavoriteName] = useFavoriteNames();

  function saveName() {
    addFavoriteName(generatedName);
    console.log("saving name", generatedName);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Warrior Cats Namensgenerator!</h1>
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        Dein neuer Name: {generatedName.vorsilbe + generatedName.nachsilbe}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ textAlign: "center", margin: "0 auto" }}
          onClick={() => setGeneratedName(generateNewName())}
        >
          Clicke hier um einen neuen Namen zu generieren!
        </button>
        <div style={{ textAlign: "center", margin: "1em" }}>
          <button onClickCapture={() => saveName()}>Name speichern</button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <ul style={{ display: "inline-block", textAlign: "start" }}>
          {favoriteNames.map((name: Name) => (
            <li key={name.id}>{name.vorsilbe + name.nachsilbe}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

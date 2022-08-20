import React, { useState } from "react";
import { nachsilben, vorsilben } from "../lib/silben";

export default function Home() {
  const [generatedName, setGeneratedName] = useState("Neuer Name");
  /* const [favoriteNames, setFavoriteName] = useState<Name[]>([]); */
  const meineVorsilben = vorsilben;
  const meineNachsilben = nachsilben;

  function generateNewName() {
    const vorsilbe =
      meineVorsilben[Math.floor(Math.random() * meineVorsilben.length)];
    const nachsilbe =
      meineNachsilben[Math.floor(Math.random() * meineNachsilben.length)];
    const newName = vorsilbe + nachsilbe;
    setGeneratedName(newName);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Warrior Cats Namensgenerator!</h1>
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        Dein neuer Name: {generatedName}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ textAlign: "center", margin: "0 auto" }}
          onClick={() => generateNewName()}
        >
          Clicke hier um einen neuen Namen zu generieren!
        </button>
      </div>
    </div>
  );
}

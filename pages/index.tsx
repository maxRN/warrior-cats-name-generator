import React from "react";
import generateNewName from "../lib/silben";
import { useFavoriteNames, Name } from "../lib/useFavoriteNames";
import { useLastName } from "../lib/useLastName";
import Image from "next/image";

export default function Home() {
  const [generatedName, setGeneratedName] = useLastName();

  return (
    <div className="w-max bg-slate-600 text-slate-100 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-center drop-shadow-xl mb-1 p-4 underline">
        Warrior Cats Namensgenerator!
      </h1>
      <div className="text-center mb-2">Dein neuer Name:</div>
      <p className="font-bold text-xl drop-shadow-sm bg-slate-700 rounded-xl w-fit p-2">
        {generatedName ? generatedName.vorsilbe + generatedName.nachsilbe : ""}
      </p>
      <NewNameButton setGeneratedName={setGeneratedName} />
      <NameList currentName={generatedName} />
    </div>
  );
}

function NameList({ currentName }: { currentName: Name | undefined }) {
  const [favoriteNames, addFavoriteName, removeName] = useFavoriteNames();

  function saveName() {
    if (currentName) {
      addFavoriteName(currentName);
    }
    console.log("saving name", currentName);
  }

  return (
    <div className="mt-2">
      <div className="text-center m-1">
        <button onClickCapture={() => saveName()}>Name speichern</button>
      </div>
      <div>
        <ul>
          {favoriteNames.map((name: Name) => (
            <li key={name.id}>
              {name.vorsilbe + name.nachsilbe}
              <button
                className="w-1/6 "
                onClickCapture={() => removeName(name.id)}
              >
                {/* trash can icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NewNameButton({
  setGeneratedName,
}: {
  setGeneratedName: (name: Name) => void;
}) {
  return (
    <div className="mt-1">
      <button
        className="text-center mt-0 mr-auto"
        onClick={() => {
          const newName = generateNewName();
          setGeneratedName(newName);
        }}
      >
        <Image
          width="100px"
          height="100px"
          src="/cat.svg"
          alt="Google Noto emoji of a grinning cat."
        />
      </button>
    </div>
  );
}

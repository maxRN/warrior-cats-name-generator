import { useEffect, useState } from "react";

export interface Name {
  vorsilbe: string;
  nachsilbe: string;
  id: string;
}

export function useFavoriteNames(): [Name[], (name: Name) => void] {
  const [names, setNames] = useState<Name[]>([]);

  useEffect(() => {
    const rawFavNames = localStorage.getItem("favorite-names");
    if (!rawFavNames || !JSON.parse(rawFavNames)) {
      return;
    }
    const favNamesLS: Name[] = JSON.parse(rawFavNames);
    setNames(favNamesLS);
  }, []);

  useEffect(() => console.log(names), [names]);

  function addFavName(newName: Name) {
    if (names.find((name: Name) => name.id === newName.id)) {
      return;
    }
    const newNames = [...names, newName];
    setNames((names) => newNames);
    localStorage.setItem("favorite-names", JSON.stringify(newNames));
  }
  return [names, addFavName];
}

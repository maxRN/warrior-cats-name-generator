import { useEffect, useState } from "react";

export interface Name {
  vorsilbe: string;
  nachsilbe: string;
  id: string;
}

export function useFavoriteNames(): [
  Name[],
  (name: Name) => void,
  (id: string) => void
] {
  const [names, setNames] = useState<Name[]>([]);

  useEffect(() => {
    const rawFavNames = localStorage.getItem("favorite-names");
    if (!rawFavNames || !JSON.parse(rawFavNames)) {
      return;
    }
    const favNamesLS: Name[] = JSON.parse(rawFavNames);
    setNames(favNamesLS);
  }, []);

  function addFavName(newName: Name) {
    if (names.find((name: Name) => name.id === newName.id)) {
      return;
    }

    const newNames = [...names, newName];
    setNames(newNames);
    localStorage?.setItem("favorite-names", JSON.stringify(newNames));
  }

  function removeName(id: string) {
    const namesWithout = names.filter((name: Name) => name.id !== id);
    setNames([...namesWithout]);
    localStorage?.setItem("favorite-names", JSON.stringify(namesWithout));
  }

  return [names, addFavName, removeName];
}

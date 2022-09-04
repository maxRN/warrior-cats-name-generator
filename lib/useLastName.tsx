import { useEffect, useState } from "react";
import { Name } from "./useFavoriteNames";

export function useLastName(): [
  name: Name | undefined,
  updateName: (newName: Name) => void
] {
  const [lastName, setLastName] = useState<Name | undefined>();

  useEffect(() => {
    const lastNameLS = localStorage.getItem("last-generated-name");

    if (lastNameLS && JSON.parse(lastNameLS)) {
      setLastName(JSON.parse(lastNameLS));
    }
  }, []);

  useEffect(() => {
    if (lastName) {
      localStorage.setItem("last-generated-name", JSON.stringify(lastName));
    }
  }, [lastName]);

  function updateName(newName: Name) {
    setLastName(newName);
  }

  return [lastName, updateName];
}

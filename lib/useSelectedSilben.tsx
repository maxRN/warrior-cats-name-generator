import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface Vorsilbe {
  vorsilbe: string;
}

export interface Nachsilbe {
  nachsilbe: string;
}

export default function useSelectedSilben(): [
  vorsilben: Vorsilbe[],
  setVorsilben: Dispatch<SetStateAction<Vorsilbe[]>>,
  nachsilben: Nachsilbe[],
  setNachsilben: Dispatch<SetStateAction<Nachsilbe[]>>
] {
  const [vorsilben, setVorsilben] = useState<Vorsilbe[]>([]);
  const [nachsilben, setNachsilben] = useState<Nachsilbe[]>([]);

  useEffect(() => {
    const savedVorsilben = localStorage.getItem("vorsilben");
    if (savedVorsilben) {
      setVorsilben(JSON.parse(savedVorsilben));
    }
  }, []);

  useEffect(() => {
    const savedNachsilben = localStorage.getItem("nachsilben");
    if (savedNachsilben) {
      setNachsilben(JSON.parse(savedNachsilben));
    }
  }, []);

  return [vorsilben, setVorsilben, nachsilben, setNachsilben];
}

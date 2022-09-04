import { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { vorsilben, nachsilben } from "../lib/silben";
import useSelectedSilben, {
  Nachsilbe,
  Vorsilbe,
} from "../lib/useSelectedSilben";

export default function SilbenAuswahl({
  setParentVorsilben,
  setParentNachsilben,
}: {
  setParentVorsilben: Dispatch<SetStateAction<Vorsilbe[]>>;
  setParentNachsilben: Dispatch<SetStateAction<Nachsilbe[]>>;
}) {
  const [
    selectedVorsilben,
    setSelectedVorsilben,
    selectedNachsilben,
    setSelectedNachsilben,
  ] = useSelectedSilben();

  const vorsilbenOptions = vorsilben.map((silbe: string) => ({
    label: silbe,
    value: silbe,
  }));

  const nachsilbenOptions = nachsilben.map((silbe: string) => ({
    label: silbe,
    value: silbe,
  }));

  const selectedVorsilbenOptions = selectedVorsilben.map((silbe: Vorsilbe) => ({
    label: silbe.vorsilbe,
    value: silbe.vorsilbe,
  }));

  const selectedNachsilbenOptions = selectedNachsilben.map(
    (silbe: Nachsilbe) => ({
      label: silbe.nachsilbe,
      value: silbe.nachsilbe,
    })
  );

  interface SilbenOption {
    label: string;
    value: string;
  }

  function handleVorsilbenChange(
    options: readonly { label: string; value: string }[]
  ) {
    const silben: Vorsilbe[] = options.map((option: SilbenOption) => ({
      vorsilbe: option.value,
    }));

    localStorage?.setItem("vorsilben", JSON.stringify(silben));
    setParentVorsilben(silben);
    setSelectedVorsilben(silben);
  }

  function handleNachsilbenChange(
    options: readonly { label: string; value: string }[]
  ) {
    const silben = options.map((option: SilbenOption) => ({
      nachsilbe: option.value,
    }));

    localStorage?.setItem("nachsilben", JSON.stringify(silben));

    setParentNachsilben(silben);
    setSelectedNachsilben(silben);
  }

  return (
    <div className="flex flow-row text-slate-800">
      <Select
        className=""
        options={vorsilbenOptions}
        onChange={handleVorsilbenChange}
        value={selectedVorsilbenOptions}
        isMulti
        instanceId="vorsilben-select"
        isSearchable
        placeholder="Vorsilben"
      />

      <Select
        className=""
        options={nachsilbenOptions}
        onChange={handleNachsilbenChange}
        value={selectedNachsilbenOptions}
        isMulti
        instanceId="nachsilben-select"
        isSearchable
        placeholder="Nachsilben"
      />
    </div>
  );
}

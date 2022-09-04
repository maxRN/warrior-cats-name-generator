import Select from "react-select";
import { vorsilben } from "../lib/silben";

export default function VorsilbenAuswahl() {
  const vorsilbenOptions = vorsilben.map((silbe: string) => ({
    label: silbe,
    value: silbe,
  }));
  return (
    <Select
      className="w-screen md:w-36"
      options={vorsilbenOptions}
      isMulti
      isSearchable
      placeholder="Vorsilben"
    />
  );
}

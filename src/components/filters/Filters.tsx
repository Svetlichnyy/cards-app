import Select from "react-select";
import { Filter } from "../../models/Filters";

import "./Filters.scss";

interface Props {
  filters: Filter;
  isFiltersActive?: boolean;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  seIsSuggestionsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Option {
  value: string;
  label: string;
}

function Filters({
  isFiltersActive,
  setFilters,
  filters,
  seIsSuggestionsActive,
}: Props) {
  const status: Option[] = [
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
    { value: "unknown", label: "Unknown" },
    { value: "", label: "Without this filter" },
  ];
  const gender: Option[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unknown", label: "Unknown" },
    { value: "", label: "Without this filter" },
  ];
  const handleChangeStatus = (option: Option | null) => {
    setFilters({
      status: option?.value || "",
      gender: filters.gender || "",
    });
  };
  const handleChangeGender = (option: Option | null) => {
    setFilters({
      status: filters.status || "",
      gender: option?.value || "",
    });
  };

  return (
    <div className={isFiltersActive ? "wrapper left-align" : "wrap disabled"}>
      <Select
        className="select"
        options={status}
        placeholder={"Filter by status..."}
        onChange={handleChangeStatus}
        onFocus={() => seIsSuggestionsActive(false)}
      />
      <Select
        className="select"
        options={gender}
        placeholder={"Filter by gender..."}
        onChange={handleChangeGender}
        onFocus={() => seIsSuggestionsActive(false)}
      />
    </div>
  );
}
export default Filters;

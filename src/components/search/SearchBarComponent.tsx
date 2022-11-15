import { DebounceInput } from "react-debounce-input";
import Suggestions from "../suggestions/Suggestions";
import Filters from "../filters/Filters";
import { Dispatch, SetStateAction } from "react";
import { Filter } from "../../models/Filters";
import { Person } from "../../models/Person";

interface Props {
  seIsSuggestionsActive: Dispatch<SetStateAction<boolean>>;
  handleDebounceInput: (value: string) => void;
  showFilters: () => void;
  handleClick: (e: React.SyntheticEvent) => void;
  options: Filter;
  setOptions: Dispatch<SetStateAction<Filter>>;
  isFiltersActive: boolean;
  isSuggestionsActive: boolean;
  suggestions: Person[];
  error: string;
}

const SearchBarComponent = ({
  seIsSuggestionsActive,
  handleDebounceInput,
  showFilters,
  handleClick,
  options,
  setOptions,
  isFiltersActive,
  isSuggestionsActive,
  suggestions,
  error,
}: Props) => {
  return (
    <div className="row">
      <div className="col s12 m1 l1"></div>
      <div className="search-wrapper col s12 m10 l10 center-align">
        <nav className="search-bar">
          <div className="nav-wrapper light-blue darken-3">
            <form>
              <div className="input-field">
                <DebounceInput
                  autoComplete="off"
                  onFocus={() => seIsSuggestionsActive(true)}
                  minLength={2}
                  debounceTimeout={500}
                  onChange={(e) => handleDebounceInput(e.target.value)}
                  placeholder="type something..."
                  id="search"
                  type="search"
                  required
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons" onClick={showFilters}>
                  filter_list
                </i>
                <button
                  onClick={handleClick}
                  type="submit"
                  className="button-search waves-effect btn"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
        <Filters
          filters={options}
          setFilters={setOptions}
          isFiltersActive={isFiltersActive}
          seIsSuggestionsActive={seIsSuggestionsActive}
        />
        <Suggestions
          seIsSuggestionsActive={seIsSuggestionsActive}
          isSuggestionsActive={isSuggestionsActive}
          suggestions={suggestions}
          error={error}
        />
      </div>
      <div className="col s12 m1 l1"></div>
    </div>
  );
};

export default SearchBarComponent;

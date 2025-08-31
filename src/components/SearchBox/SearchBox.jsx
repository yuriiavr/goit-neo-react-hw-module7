import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchCont}>
      <span className={css.searchLabel}>Find contacts by name</span>
      <input className={css.searchInput} type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
import { useRef } from "react";
import { fetchSearchCocktail } from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";
const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();
  const hnadleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cockatil</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={searchValue}
            onChange={hnadleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;

import React from "react";
import SearchIcon from "./SearchIcon";
import useSearchBar from "hooks/useSearchBar";

import '../styles/SearchBar.scss';


const SearchBar = ({ runSearch }) => {
  /**
   * I don't LOVE that runSearch() is passed from the useApplicationData hook while the rest of the search state
   * comes from the useSearchBarHook. Maybe there's a better way to organize this?
   */
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, searchCategories } = useSearchBar();

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(searchTerm, selectedCategory);
    setSearchTerm(""); // after submit, the searchTerm is cleared, but the selectedCategory remains for subsequent searches
  };

  const options = searchCategories.map((category) => {
    return <option key={category.value} value={`${category.value}`} label={`${category.label}`} />;
  });

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <input className="search-bar__input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <select className="search-bar__select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {options}
      </select>
      <SearchIcon />
    </form >
  );
};

export default SearchBar;
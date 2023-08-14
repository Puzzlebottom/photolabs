import { useState } from 'react';

const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchCategories = [{ value: 'location', label: 'Location' }, { value: 'photographer', label: 'Photographer' }];
  const [selectedCategory, setSelectedCategory] = useState(searchCategories[1].value);

  return { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, searchCategories };
};

export default useSearchBar;
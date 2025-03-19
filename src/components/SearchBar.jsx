import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    onSearch(value); // Pass search query to parent
  };

  return (
    <div className="w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Search by title, author, or category..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
  };

  return (
    <div>
      <input 
      className='bg-transparent border-4 border-white rounded-xl p-2 mr-8 text-white'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

import { useState } from 'react';

function SearchBar({ onSetQuery }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') {
      console.log('Enter search query');
    } else {
      onSetQuery(inputValue);
      setInputValue('');
    }
  }

  return (
    <header className="header">
      <form onSubmit={handleSubmit} className="search">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;

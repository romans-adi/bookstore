// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddBook = ({ onAddBook }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' && selectedCategory.trim() !== '') {
      const newBook = {
        title: inputValue,
        category: selectedCategory,
      };
      onAddBook(newBook);
      setInputValue('');
      setSelectedCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a book"
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddBook;

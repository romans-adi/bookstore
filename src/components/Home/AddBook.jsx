import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ onAddBook }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const categories = ['Thriller', 'Mystery', 'Detective', 'Neo-Noir', 'Science Fiction', 'Fiction', 'Nonfiction'];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' && selectedAuthor.trim() !== '') {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const newBook = {
        title: inputValue,
        category: randomCategory,
        author: selectedAuthor,
      };

      setIsLoading(true); // Start loading

      try {
        await onAddBook(newBook);
        setInputValue('');
        setSelectedAuthor('');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="add-book">
      <h3 className="add-book-heading">Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Book title"
        />
        <select value={selectedAuthor} onChange={handleAuthorChange}>
          <option value="">Select an author</option>
          <option value="John Doe">John Doe</option>
          <option value="John Noakes">John Noakes</option>
          <option value="Richard Miles">Richard Miles</option>
          <option value="Mary Major">Mary Major</option>
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddBook;

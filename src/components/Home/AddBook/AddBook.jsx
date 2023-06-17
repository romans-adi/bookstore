import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './AddBook.scss';

const AddBook = ({ onAddBook }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const categories = ['Action', 'Economy', 'Science Fiction'];
  const authors = [
    { value: 'Frank Herbert', label: 'Frank Herbert' },
    { value: 'Suzanne Collins', label: 'Suzanne Collins' },
    { value: 'Richard Miles', label: 'Richard Miles' },
    { value: 'Mary Major', label: 'Mary Major' },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAuthorChange = (selectedOption) => {
    setSelectedAuthor(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' && selectedAuthor && selectedAuthor.value.trim() !== '') {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const newBook = {
        title: inputValue,
        category: randomCategory,
        author: selectedAuthor.value,
      };

      setIsLoading(true);

      try {
        await onAddBook(newBook);
        setInputValue('');
        setSelectedAuthor(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const settingSelect = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'inherit',
      border: 'none',
      height: '100%',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuIsOpen ? '#000' : '#c4c4c4',
      transform: state.selectProps.menuIsOpen ? 'rotate(-90deg)' : 'none',
    }),
    menu: (provided) => ({
      ...provided,
      color: '#c4c4c4',
    }),
    option: (provided, state) => ({
      ...provided,
      // eslint-disable-next-line no-nested-ternary
      color: state.isFocused ? '#fff' : state.isSelected ? '#fff' : '#333',
      // eslint-disable-next-line no-nested-ternary
      backgroundColor: state.isFocused ? '#0290ff' : state.isSelected ? '#333' : 'transparent',
      '&:hover': {
        backgroundColor: '#0290ff',
        color: '#fff',
        cursor: 'pointer',
      },
    }),
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
        <Select
          className="select"
          value={selectedAuthor}
          onChange={handleAuthorChange}
          options={authors}
          styles={settingSelect}
          placeholder="Author"
        />
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

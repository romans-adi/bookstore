import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';

const RemoveBook = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  );
};

RemoveBook.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RemoveBook;

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const RemoveBook = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <button type="button" onClick={handleRemove}>Remove</button>
  );
};

export default RemoveBook;

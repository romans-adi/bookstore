import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const RemoveBook = ({ bookId, onRemoveBook }) => {
  const handleRemove = () => {
    onRemoveBook(bookId);
  };

  return (
    <button type="button" onClick={handleRemove}>Remove</button>
  );
};

RemoveBook.propTypes = {
  onRemoveBook: PropTypes.func.isRequired,
  bookId: PropTypes.number.isRequired,
};

export default RemoveBook;

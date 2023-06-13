import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const RemoveBook = ({ itemId, onRemoveBook }) => {
  const handleRemove = () => {
    onRemoveBook(itemId);
  };

  return (
    <button type="button" onClick={handleRemove}>Remove</button>
  );
};

RemoveBook.propTypes = {
  onRemoveBook: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default RemoveBook;

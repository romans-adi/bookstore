import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const BookItem = ({ book, onRemoveBook, onSelectCategory }) => {
  const {
    id, title, author, category,
  } = book;

  const handleSelectCategory = () => {
    onSelectCategory(category);
  };

  return (
    <div className="book-card" key={id}>
      <ul>
        <button
          type="button"
          className="book-category"
          onClick={handleSelectCategory}
        >
          {category}
        </button>
        <li className="book-title">{title}</li>
        <li className="book-author">{author}</li>
        <li>
          <div>
            <ul className="actions">
              <li>Comments</li>
              <li>
                <RemoveBook itemId={id} onRemoveBook={onRemoveBook} />
              </li>
              <li>Edit</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default BookItem;

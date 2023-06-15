import React from 'react';
import RemoveBook from './RemoveBook';

const BookItem = ({ book, onSelectCategory, onRemoveBook }) => {
  const {
    id, title, author, category,
  } = book;

  const handleSelectCategory = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="book-card" key={id}>
      <ul>
        <button
          type="button"
          className="book-category"
          onClick={() => handleSelectCategory(category)}
        >
          {book.category}
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

export default BookItem;

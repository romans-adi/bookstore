import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from '../RemoveBook/RemoveBook';
import CircularProgressBar from '../ProgressBar/ProgressBar';

const BookItem = ({ book, onRemoveBook, onSelectCategory }) => {
  const {
    id, title, author, category,
  } = book;

  const handleSelectCategory = () => {
    onSelectCategory(category);
  };

  const calculateProgressPercentage = (bookId) => {
    if (bookId === '92b9f89f-6d86-40a1-be6a-8a62bc353498') {
      return 0;
    }
    if (bookId === '6d5205bd-91c0-49ff-969a-9e48e2c0c462') {
      return 64;
    }
    if (bookId === '65d6a732-af79-4471-be34-dd26eda64ba1') {
      return 8;
    }
    return 0;
  };

  const calculateCurrentChapter = (bookId) => {
    if (bookId === '92b9f89f-6d86-40a1-be6a-8a62bc353498') {
      return 'Introduction';
    }
    if (bookId === '65d6a732-af79-4471-be34-dd26eda64ba1') {
      return 'Chapter 3: A Lesson Learned';
    }
    if (bookId === '6d5205bd-91c0-49ff-969a-9e48e2c0c462') {
      return 'Chapter 17';
    }
    return 'Not Started';
  };

  const progressPercentage = calculateProgressPercentage(id);
  const currentChapter = calculateCurrentChapter(id);

  return (
    <div className="book-card" key={id}>
      <div className="left-column">
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
      <div className="central-column">
        <div className="progress-column">
          <CircularProgressBar progress={progressPercentage} />
          <div className="progress-stats">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            />
            <div className="progress-label">
              {`${progressPercentage}%`}
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="current-chapter-column">
          <div className="current-chapter-label">Current Chapter</div>
          <div className="current-chapter">
            <div className="current-chapter-content">{currentChapter}</div>
          </div>
          <button type="button" className="update-progress-button">
            Update Progress
          </button>
        </div>
      </div>
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

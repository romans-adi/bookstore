import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PacmanLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import BookItem from './BookItem';
import {
  selectCategory,
  fetchBooks,
  removeBook,
  addBook,
} from '../../redux/books/booksSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const selectedCategory = useSelector((state) => state.books.selectedCategory);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = (newBook) => {
    const book = {
      id: uuidv4(),
      title: newBook.title.trim(),
      author: newBook.author.trim(),
      category: newBook.category.trim(),
    };

    if (book.title && book.author && book.category) {
      dispatch(addBook(book));
    }
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  const handleSelectCategory = (category) => {
    if (selectedCategory === category) {
      dispatch(selectCategory(null));
    } else {
      dispatch(selectCategory(category));
    }
  };

  if (status === 'loading') {
    return (
      <div className="spinner-container">
        <PacmanLoader color="#123abc" />
      </div>
    );
  }

  return (
    <div id="home">
      {status === 'failed' && (
        <div>
          Error:
          {' '}
          {error}
        </div>
      )}

      {!Array.isArray(books) || books.length === 0 ? (
        <div>No books found.</div>
      ) : (
        books.map((book, index) => (
          <BookItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${book.id}-${index}`}
            book={book}
            onRemoveBook={handleRemoveBook}
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        ))
      )}

      <AddBook onAddBook={handleAddBook} />
    </div>
  );
};

export default Home;

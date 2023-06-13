import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import store from '../../redux/store';
import RemoveBook from './RemoveBook';
import { addBook, removeBook, selectCategory } from '../../redux/books/booksSlice';
import selectBooksByCategory from '../../redux/books/bookSelectors';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooksByCategory);

  const generateId = () => {
    const lastBook = books[books.length - 1];
    const lastItemId = lastBook ? parseInt(lastBook.item_id.slice(4), 10) : 0;
    const newItemId = lastItemId + 1;
    return `item${newItemId}`;
  };

  const handleAddBook = (newBook) => {
    const book = {
      item_id: generateId(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    };
    dispatch(addBook(book));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  const handleSelectCategory = (category) => {
    const { selectedCategory } = store.getState().books;
    if (selectedCategory === category) {
      dispatch(selectCategory(null));
    } else {
      dispatch(selectCategory(category));
    }
  };

  return (
    <div id="home">
      {books.map((book) => (
        <div key={book.item_id} className="book-card">
          <ul>
            <button type="button" className="book-category" onClick={() => handleSelectCategory(book.category)}>
              {book.category}
            </button>
            <li className="book-title">{book.title}</li>
            <li className="book-author">{book.author}</li>
            <li>
              <div>
                <ul className="actions">
                  <li>Comments</li>
                  <li>
                    <RemoveBook itemId={book.item_id} onRemoveBook={handleRemoveBook} />
                  </li>
                  <li>Edit</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      ))}
      <AddBook onAddBook={handleAddBook} />
    </div>
  );
};

export default Home;

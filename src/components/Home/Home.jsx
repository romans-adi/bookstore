import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import RemoveBook from './RemoveBook';
import { addBook, removeBook, selectCategory } from '../../redux/books/booksSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books.allBooks);
  const selectedCategory = useSelector((state) => state.books.selectedCategory);

  const generateId = () => {
    const lastBook = allBooks[allBooks.length - 1];
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
    if (selectedCategory === category) {
      dispatch(selectCategory(null));
    } else {
      dispatch(selectCategory(category));
    }
  };

  const filteredBooks = selectedCategory
    ? allBooks.filter((book) => book.category === selectedCategory)
    : allBooks;

  return (
    <div id="home">
      {filteredBooks.map((book) => (
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

import React, { useState } from 'react';
import AddBook from './AddBook';
import RemoveBook from './RemoveBook';
import './Home.scss';

const Home = () => {
  const [books, setBooks] = useState([]);

  const generateRandomKey = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    if (books.some((book) => book.id === randomNumber)) {
      return generateRandomKey();
    }
    return randomNumber;
  };

  const handleAddBook = (newBook) => {
    const bookWithId = { ...newBook, id: generateRandomKey() };
    setBooks([...books, bookWithId]);
  };

  const handleRemoveBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div id="home">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <ul>
            <li className="book-category">{book.category}</li>
            <li className="book-title">{book.title}</li>
            <li className="book-author">{book.author}</li>
            <li>
              <div>
                <ul className="actions">
                  <li>Comments</li>
                  <li>
                    <RemoveBook bookId={book.id} onRemoveBook={handleRemoveBook} />
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

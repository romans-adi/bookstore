import React, { useState } from 'react';
import AddBook from './AddBook';
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

  return (
    <div id="home">
      <AddBook onAddBook={handleAddBook} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            - Category:
            {' '}
            {book.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

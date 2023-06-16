import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HokFni6brkU8gurWrF1p';

export const fetchBooksData = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    const booksData = response.data;
    const bookIds = Object.keys(booksData);
    const books = bookIds.map((bookId) => {
      const book = booksData[bookId][0];
      return { id: bookId, ...book };
    });
    return books;
  } catch (error) {
    throw new Error('Failed to fetch books. Please try again later.');
  }
});

export const addBookData = createAsyncThunk('books/addBook', async (book) => {
  try {
    const modifiedBook = {
      item_id: book.id,
      ...book,
    };
    const response = await axios.post(`${API_URL}/books`, modifiedBook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBookData = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`${API_URL}/books/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

import { createSlice } from '@reduxjs/toolkit';
import { fetchBooksData, addBookData, removeBookData } from './bookAPI';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    selectedCategory: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const books = Object.values(action.payload).flatMap((bookArray) => bookArray);
        state.books = books;
      })
      .addCase(fetchBooksData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBookData.fulfilled, (state, action) => {
        const response = action.payload;
        if (response === 'Created') {
          state.status = 'succeeded';
          const book = {
            id: action.meta.arg.id,
            title: action.meta.arg.title,
            author: action.meta.arg.author,
            category: action.meta.arg.category,
          };
          state.books.push(book);
        } else {
          state.status = 'failed';
          state.error = 'Failed to add book';
        }
      })
      .addCase(addBookData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBookData.fulfilled, (state, action) => {
        const itemId = action.payload;
        state.books = state.books.filter((book) => book.id !== itemId);
      });
  },
});

export const { selectCategory } = booksSlice.actions;
export default booksSlice.reducer;
export const fetchBooks = fetchBooksData;
export const addBook = addBookData;
export const removeBook = removeBookData;

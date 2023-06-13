// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBooks: [],
  selectedCategory: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.allBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.allBooks = state.allBooks.filter((book) => book.id !== bookId);
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addBook, removeBook, selectCategory } = booksSlice.actions;
export default booksSlice.reducer;

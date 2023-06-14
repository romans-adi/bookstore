import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBooks: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
      state.allBooks = state.allBooks.filter((book) => book.item_id !== bookId);
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addBook, removeBook, selectCategory } = booksSlice.actions;
export default booksSlice.reducer;

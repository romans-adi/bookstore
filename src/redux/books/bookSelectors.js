const selectBooksByCategory = (state) => {
  const { selectedCategory } = state.books;
  if (!selectedCategory) {
    return state.books.books;
  }
  return state.books.books.filter((book) => book.category === selectedCategory);
};

export default selectBooksByCategory;

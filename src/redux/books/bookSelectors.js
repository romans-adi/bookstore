const selectBooksByCategory = (state) => {
  const { selectedCategory, allBooks } = state.books;
  if (!selectedCategory) {
    return allBooks;
  }
  return allBooks.filter((book) => book.category === selectedCategory);
};

export default selectBooksByCategory;

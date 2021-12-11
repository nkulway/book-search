export const createListOfBooks = (books) => {
  const listOfBooks = books.map((book, index) => {
    return (<li data-bookid={book.key} key={index}>
        {book.title} by {book.author_name}
      </li>
    );
  });
  return listOfBooks;
};
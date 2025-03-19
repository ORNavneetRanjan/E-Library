import React, { useState } from "react";
import { books } from "../data/books";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

const BookList = ({ setAlert }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query) // Now filters by category too
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Available Books</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Grid Layout for Books */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} setAlert={setAlert} />
          ))
        ) : (
          <p className="text-gray-600">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;

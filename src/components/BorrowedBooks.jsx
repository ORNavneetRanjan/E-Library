import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { returnBook } from "../apis/main";

function BorrowedBooks({ setAlert }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooks(books);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-200 gap-4">
      <h2 className="text-4xl font-semibold mb-4">📚 Borrowed Books</h2>

      {borrowedBooks.length === 0 ? (
        <p className="text-gray-500">No books borrowed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {borrowedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isAble={false}
              onReturn={() => returnBook(book, setAlert, setBorrowedBooks)}
              setBorrowedBooks={setBorrowedBooks}
              setAlert={setAlert}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BorrowedBooks;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./components/BookList";
import ShowBookDetails from "./components/ShowBookDetails";
import Alert from "./components/Alert";
import BorrowedBooks from "./components/BorrowedBooks";
import Return from "./components/Return";

export default function App() {
  const [alert, setAlert] = useState(null);

  function removeAlert() {
    setAlert(null);
  }

  useEffect(() => {
    checkDueBooks();
  }, []);

  function checkDueBooks() {
    let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const today = new Date();

    borrowedBooks.forEach((book) => {
      const dueDate = new Date(book.dueDate);
      const timeDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24)); // Convert to days

      if (timeDiff <= 3 && timeDiff >= 0) {
        setAlert({
          message: `Reminder: "${book.title}" is due in ${timeDiff} day(s)!`,
          type: "warning",
        });
      } else if (timeDiff < 0) {
        setAlert({
          message: `Overdue: "${
            book.title
          }" was due on ${dueDate.getDate()} ${dueDate.toLocaleString("en-US", {
            month: "short",
          })}, ${dueDate.getFullYear()}. Please return it!`,
          type: "error",
        });
      }
    });
  }

  return (
    <>
      <Alert alert={alert} setAlert={setAlert} removeAlert={removeAlert} />
      <Routes>
        <Route path="/" element={<Home setAlert={setAlert} />} />
        <Route path="/BookList" element={<BookList setAlert={setAlert} />} />
        <Route
          path="/BookList/:id"
          element={<ShowBookDetails setAlert={setAlert} />}
        />
        <Route
          path="/Borrowed"
          element={<BorrowedBooks setAlert={setAlert} />}
        />
        <Route path="/Return" element={<Return />} />
      </Routes>
    </>
  );
}

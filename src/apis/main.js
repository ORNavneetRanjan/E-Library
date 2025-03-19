export const borrowBook = (book, setAlert) => {
  let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

  if (borrowedBooks.length >= 3) {
    setAlert({
      message: "You cannot borrow more than 3 books.",
      type: "warning",
    });
    return;
  }

  if (borrowedBooks.some((b) => b.id === book.id)) {
    setAlert({ message: "You already borrowed this book.", type: "warning" });
    return;
  }

  const borrowDate = new Date();
  const dueDate = new Date();
  dueDate.setDate(borrowDate.getDate() + 14);

  const borrowedBook = {
    ...book,
    borrowDate: borrowDate.toISOString(),
    dueDate: dueDate.toISOString(),
  };

  borrowedBooks.push(borrowedBook);
  localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

  const formattedDueDate = `${dueDate.getDate()} ${dueDate.toLocaleString(
    "en-US",
    { month: "short" }
  )}, ${dueDate.getFullYear()}`;

  setAlert({
    message: `You have borrowed "${book.title}", due on ${formattedDueDate}.`,
    type: "success",
  });
};

export const returnBook = (book, setAlert, setBorrowedBooks) => {
  let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
  let returnHistory = JSON.parse(localStorage.getItem("returnHistory")) || [];

  const bookIndex = borrowedBooks.findIndex((b) => b.id === book.id);
  if (bookIndex === -1) {
    setAlert({ message: "You haven't borrowed this book.", type: "error" });
    return;
  }

  const { borrowDate } = borrowedBooks[bookIndex];
  borrowedBooks.splice(bookIndex, 1);
  localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

  setBorrowedBooks([...borrowedBooks]);

  const returnData = {
    ...book,
    borrowDate,
    returnDate: new Date().toISOString(),
  };
  returnHistory.push(returnData);
  localStorage.setItem("returnHistory", JSON.stringify(returnHistory));

  setAlert({ message: `You have returned "${book.title}".`, type: "success" });
};

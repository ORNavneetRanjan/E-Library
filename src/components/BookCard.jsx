import { Link } from "react-router-dom";
import { borrowBook, returnBook } from "../apis/main";

const BookCard = ({ book, setAlert, isAble = true, setBorrowedBooks }) => {
  const dueDate = book.dueDate ? new Date(book.dueDate) : null;
  const today = new Date();

  let colorClass = "text-green-600";
  let message = `Due Date: ${
    dueDate
      ? dueDate.getDate() +
        " " +
        dueDate.toLocaleString("en-US", { month: "short" }) +
        " " +
        dueDate.getFullYear()
      : "N/A"
  }`;

  if (dueDate) {
    const daysLeft = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

    if (daysLeft <= 3) {
      colorClass = "text-red-600 font-bold"; // Red
    } else if (daysLeft <= 5) {
      colorClass = "text-yellow-600 font-semibold"; // Yellow
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-xl w-72 flex flex-col overflow-hidden transition-transform hover:scale-105">
      <Link to={`/BookList/${book.id}`}>
        <div className="w-full h-96">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-xs self-start">
          {book.category}
        </span>
        <h2 className="text-xl font-bold leading-tight">{book.title}</h2>
        <p className="text-gray-600 text-lg">by {book.author}</p>

        {isAble ? (
          <button
            onClick={() => borrowBook(book, setAlert, setBorrowedBooks)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Borrow Book
          </button>
        ) : (
          <>
            <p className={`${colorClass} mt-2`}>{message}</p>
            <button
              onClick={() => returnBook(book, setAlert, setBorrowedBooks)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all"
            >
              Return Book
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookCard;

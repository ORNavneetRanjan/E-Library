import { useParams } from "react-router-dom";
import { books } from "../data/books";
import { borrowBook } from "../apis/main";
import { FaStar } from "react-icons/fa";

const ShowBookDetails = ({ setAlert }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-xl mt-10">Book not found</div>;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl flex gap-8">
        <div className="w-1/3">
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-xl text-gray-700">by {book.author}</p>

          <div className="flex items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <span className="ml-2 text-gray-600">4.5 (320 ratings)</span>
          </div>

          <p className="text-gray-600">{book.description}</p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {book.category}
            </span>
          </div>

          <div className="text-gray-500 text-xl mt-4">
            <p>
              <strong>Published Year:</strong> {book.publishedYear}
            </p>
            <p>
              <strong>Available Copies:</strong> {book.availableCopies}
            </p>
          </div>

          <div>
            <button
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md text-xl hover:bg-blue-700"
              onClick={() => borrowBook(book, setAlert)}
            >
              Borrow Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookDetails;

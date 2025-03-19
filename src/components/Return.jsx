import React, { useEffect, useState } from "react";
import ReturnCard from "../components/ReturnCard";

function Return() {
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("returnHistory")) || [];
    setReturnedBooks(history);
  }, []);

  return (
    <div className="p-6 flex flex-col items-center bg-gray-300 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Return History</h1>

      {returnedBooks.length === 0 ? (
        <p className="text-gray-500">No return history found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {returnedBooks.map((book, index) => (
            <ReturnCard key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Return;

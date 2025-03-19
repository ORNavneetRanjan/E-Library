import React from "react";

const ReturnCard = ({ book }) => {
  const borrowDate = new Date(book.borrowDate).toLocaleDateString();
  const returnDate = new Date(book.returnDate).toLocaleDateString();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80 flex flex-col items-center text-center">
      <img
        src={book.image}
        alt={book.title}
        className="w-32 h-48 object-cover rounded-md"
      />

      <h2 className="text-lg font-bold mt-2">{book.title}</h2>
      <p className="text-gray-600 text-sm">by {book.author}</p>

      <table className="mt-3 w-full border-collapse">
        <tbody>
          <tr className="border-t">
            <td className="font-semibold p-2 text-gray-700">Borrowed:</td>
            <td className="p-2 text-gray-600">{borrowDate}</td>
          </tr>
          <tr className="border-t">
            <td className="font-semibold p-2 text-gray-700">Returned:</td>
            <td className="p-2 text-gray-600">{returnDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReturnCard;

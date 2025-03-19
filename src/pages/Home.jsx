import { useState, useEffect } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  // Simulated borrowed books count (Replace with real data source)
  const [borrowedBooksCount, setBorrowedBooksCount] = useState(0);

  // Simulating fetching the borrowed book count from localStorage or an API
  useEffect(() => {
    const borrowedBooks =
      JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooksCount(borrowedBooks.length);
  }, []);

  return (
    <div className="flex h-screen bg-gray-300">
      {/* Sidebar */}
      <div className="relative p-10">
        <Link to="/Borrowed" className="relative">
          <img
            className="w-20 h-12 object-scale-down rounded-full"
            src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"
            alt="second logo"
          />
          <p className="absolute right-0 top-0 text-white bg-sky-500 p-1 rounded-full">
            {borrowedBooksCount}
          </p>
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full p-4 md:p-12">
          {/* Borrowed Books */}
          <Link to={"/Borrowed"}>
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center text-center h-full hover:border-4 hover:border-black">
              <HiOutlineClipboardList size={64} className="text-black" />
              <h2 className="text-2xl font-bold mt-4">
                Your Borrowed Book List
              </h2>
            </div>
          </Link>

          {/* Returned Books */}
          <Link to={"/Return"}>
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center text-center h-full hover:border-4 hover:border-black">
              <MdOutlineShoppingCartCheckout size={64} className="text-black" />
              <h2 className="text-2xl font-bold mt-4">
                Your Returned Book List
              </h2>
            </div>
          </Link>

          {/* Browse Inventory */}
          <Link to={"/BookList"}>
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center text-center h-full hover:border-4 hover:border-black">
              <MdOutlineLocalLibrary size={64} className="text-black" />
              <h2 className="text-2xl font-bold mt-4">
                Let's Browse Available Book Inventory
              </h2>
            </div>
          </Link>

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center justify-center text-center h-full">
            <img src="/logo.jpg" className="w-1/6 rounded-full" />
            <h1 className="text-4xl font-bold">BookWorm LIBRARY</h1>
            <p className="text-lg mt-2">
              "Embarking on the journey of reading"
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5"; // For warning alerts

const themeMap = {
  success: {
    color: "bg-green-400",
    textColor: "text-white",
    Icon: FaRegCheckCircle,
  },
  warning: {
    color: "bg-yellow-400",
    textColor: "text-black",
    Icon: IoWarningOutline,
  },
  error: {
    color: "bg-red-500",
    textColor: "text-white",
    Icon: MdErrorOutline,
  },
};

function Alert({ alert, setAlert, removeAlert }) {
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert, removeAlert]);

  if (!alert) return null;

  console.log(alert);
  const { message, type } = alert;
  const { color, textColor, Icon } = themeMap[type] || themeMap["error"];

  return (
    <div className="w-full p-4 flex justify-center">
      <div
        className={`text-lg flex justify-between items-center max-w-screen-lg w-full px-4 py-2 rounded-md shadow-lg ${color} ${textColor}`}
      >
        <span className="flex items-center gap-4">
          <Icon className="text-2xl" />
          <p>{message}</p>
        </span>
        <button
          className="text-gray-700 font-bold border-0"
          onClick={() => setAlert(null)}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default Alert;

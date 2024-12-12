import React from "react";
import syringeIcon from "../assets/Syringe.png"; // Replace with the actual path if needed

const Page5 = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50 p-6">
      {/* Top Section: Date and Tabs */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-8">
        {/* Date Picker */}
        <div className="flex items-center border rounded-md px-4 py-2 bg-white shadow-sm">
          <span className="text-gray-700 font-medium">Aujourd'hui - 19 Sep 2024</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.707a1 1 0 011.416-1.414L10 9.585l3.292-3.292a1 1 0 011.416 1.414l-4 4a1 1 0 01-1.416 0l-4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 focus:outline-none">
            En attente
          </button>
          <button className="text-gray-500 font-medium focus:outline-none">
            Prêt
          </button>
          <button className="text-gray-500 font-medium focus:outline-none">
            Retiré
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src={syringeIcon}
          alt="Syringe Icon"
          className="w-24 h-24 mb-6"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Aucune commande prévue aujourd'hui.
        </h2>
        <p className="text-gray-500 text-center">
          Lorsqu'une nouvelle commande est programmée, elle apparaîtra ici.
        </p>
      </div>
    </div>
  );
};

export default Page5;

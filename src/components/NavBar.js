import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralCreateModal from "./GeneralCreateModal";
import CreateClothesModal from "./CreateClothesModal";

const NavBar = () => {
  const [generalModalOpen, setGeneralModalOpen] = useState(false);
  const [clothesModalOpen, setClothesModalOpen] = useState(false);

  return (
    <>
      {generalModalOpen && (
        <GeneralCreateModal
          onClose={() => setGeneralModalOpen(false)}
          openClothesModal={() => {
            setGeneralModalOpen(false);
            setClothesModalOpen(true);
          }}
        />
      )}

      {clothesModalOpen && (
        <CreateClothesModal onClose={() => setClothesModalOpen(false)} />
      )}
      <nav
        aria-label="Primary"
        className="fixed z-50 left-1/2 -translate-x-1/2 bottom-4 w-full max-w-lg h-16 rounded-full bg-white border shadow-sm"
      >
        <div className="h-full grid grid-cols-3 items-center justify-items-center">
          {/* Home */}
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full h-full"
          >
            <button
              type="button"
              aria-label="Home"
              className="flex flex-col items-center justify-center px-4 py-2 w-full h-full hover:bg-zinc-100 rounded-l-full"
            >
              <svg
                className="w-6 h-6 mb-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4 12 8-8 8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Home</span>
            </button>
          </Link>

          {/* Create / New */}

          <button
            type="button"
            aria-label="Create new item"
            className="flex relative items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-md hover:scale-105 transition-transform"
            onClick={() => setGeneralModalOpen(true)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5v14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Add new</span>
          </button>

          {/* Library */}
          <Link
            to="/clothinglibrarypage"
            className="inline-flex items-center justify-center w-full h-full"
          >
            <button
              type="button"
              aria-label="Library"
              className="flex flex-col items-center justify-center px-4 py-2 w-full h-full hover:bg-zinc-100 rounded-r-full"
            >
              <svg
                className="w-6 h-6 mb-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4v16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4v16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4v16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Library</span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

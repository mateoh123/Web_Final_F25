import React from "react";
import { Link } from "react-router-dom";

const GeneralCreateModal = ({ onClose, openClothesModal }) => {
  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-md mb-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4">
          <Link to="/outfitcreationpage">
            <button
              className="px-4 py-2 rounded-full bg-neutral-300"
              onClick={onClose}
            >
              Create Outfit
            </button>
          </Link>

          <button
            className="px-4 py-2 rounded-full bg-neutral-300"
            onClick={openClothesModal}
          >
            Create Clothes
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralCreateModal;

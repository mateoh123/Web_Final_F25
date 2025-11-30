import React from "react";
import ClothesCreate from "./ClothesCreate";
import axios from "axios";

const CreateClothesModal = ({ onClose }) => {
  const createClothes = async (newClothe) => {
    await axios.post("http://localhost:3001/clothes", newClothe);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="rounded-md bg-white w-96 mb-24 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <h1>Create Clothes</h1>
          <ClothesCreate onCreate={createClothes} />
        </div>
      </div>
    </div>
  );
};

export default CreateClothesModal;

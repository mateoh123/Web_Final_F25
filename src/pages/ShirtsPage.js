import React, { useState } from "react";
import ClothesList from "../components/ClothesList.js";
import ClothesInfoModal from "../components/ClothesInfoModal.js";

const ShirtPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const openInfoModal = (id) => {
    setSelectedID(id);
    setModalOpen(true);
  };

  const closeInfoModal = () => {
    setModalOpen(false);
    setSelectedID(null);
  };

  return (
    <>
      {modalOpen && (
        <ClothesInfoModal onClose={closeInfoModal} clothesID={selectedID} />
      )}

      <h1>Shirts Page</h1>

      <div className="flex flex-wrap justify-evenly m-4">
        <ClothesList clothingtypeID="tops" cardClick={openInfoModal} />
      </div>
    </>
  );
};

export default ShirtPage;

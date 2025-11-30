import React from "react";
import OutfitsList from "../components/OutfitsList";

const OutfitCollectionsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Outfit Collections</h1>
      <OutfitsList />
    </div>
  );
};

export default OutfitCollectionsPage;

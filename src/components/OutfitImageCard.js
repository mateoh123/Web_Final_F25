import React from "react";

const OutfitImageCard = ({ id, image }) => {
  return (
    <div>
      <h3>{id}</h3>
      {image && <img src={image} alt={id} className="w-[200px]" />}
    </div>
  );
};

export default OutfitImageCard;

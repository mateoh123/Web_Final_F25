import ClothingImageCard from "./ClothingImageCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Draggable } from "./DragClothes";

const ClothesList = ({
  clothingtypeID,
  cardClick,
  isDraggablePage = false,
}) => {
  const [clothing, setClothes] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      const response = await axios.get("http://localhost:3001/clothes");
      setClothes(
        response.data.filter((item) => item.clothingtype === clothingtypeID)
      );
    };
    fetchClothes();
  }, [clothingtypeID]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {clothing.map((clothes) =>
        isDraggablePage ? (
          <Draggable
            key={clothes.id}
            id={`draggable-${clothes.id}`}
            data={clothes} // Pass the full clothing object
          >
            <div onClick={() => cardClick && cardClick(clothes.id)}>
              <ClothingImageCard
                id={clothes.id}
                clothingType={clothes.clothingtype}
                image={clothes.image}
              />
            </div>
          </Draggable>
        ) : (
          <div
            key={clothes.id}
            onClick={() => cardClick && cardClick(clothes.id)}
          >
            <ClothingImageCard
              id={clothes.id}
              clothingType={clothes.clothingtype}
              image={clothes.image}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ClothesList;

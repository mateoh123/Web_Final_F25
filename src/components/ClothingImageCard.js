import React from "react";
import { useDraggable } from "@dnd-kit/core";

const ClothingImageCard = ({ clothingType, image, isDraggablePage }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: image, // unique ID
    disabled: !isDraggablePage, // ⬅ only draggable on Outfit page
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      className="clothing-card"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      <h3>{clothingType}</h3>
      {image && <img src={image} alt={clothingType} className="w-[200px]" />}
    </div>
  );
};

export default ClothingImageCard;

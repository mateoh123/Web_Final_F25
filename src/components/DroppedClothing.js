import ClothingImageCard from "./ClothingImageCard";

const DroppedClothing = ({ id, image, clothingType }) => {
  return (
    <div className="absolute">
      <ClothingImageCard
        id={id}
        image={image}
        clothingType={clothingType}
        draggable={true}
      />
    </div>
  );
};

export default DroppedClothing;

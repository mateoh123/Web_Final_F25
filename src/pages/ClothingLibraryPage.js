import React, { useState } from "react";
import ClothingCategoriesCard from "../components/ClothingCategoriesCard";
import shirtIcon from "../clothe_images/shirticon.webp";
import pantsIcon from "../clothe_images/pantsicon.webp";
import shoesIcon from "../clothe_images/shoesicon.avif";
import accessIcon from "../clothe_images/accessicon.jpg&&wid=999&hei=999&fmt=png-alpha";

const ClothingLibraryPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly m-4">
        <ClothingCategoriesCard
          image={shirtIcon}
          title="Shirts"
          page="/clothinglibrarypage/shirtspage"
        />
        <ClothingCategoriesCard
          image={pantsIcon}
          title="Pants"
          page="/clothinglibrarypage/pantspage"
        />
        <ClothingCategoriesCard
          image={shoesIcon}
          title="Shoes"
          page="/clothinglibrarypage/shoespage"
        />
        <ClothingCategoriesCard
          image={accessIcon}
          title="Accessories"
          page="/clothinglibrarypage/accessoriespage"
        />
      </div>
    </>
  );
};

export default ClothingLibraryPage;

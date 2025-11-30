import React, { useState, useEffect } from "react";
import axios from "axios";
import OutfitImageCard from "./OutfitImageCard";

const OutfitsList = ({ outfits }) => {
  const [outfitList, setOutfits] = useState([]);

  const fetchOutfits = async () => {
    const response = await axios.get("http://localhost:3001/outfits");
    setOutfits(response.data);
  };

  useEffect(() => {
    fetchOutfits();
  }, []);

  const renderedOutfits = (outfits || outfitList).map((outfit) => (
    <OutfitImageCard key={outfit.id} id={outfit.id} image={outfit.image} />
  ));

  return <div className="grid grid-cols-3 gap-4">{renderedOutfits}</div>;
};

export default OutfitsList;

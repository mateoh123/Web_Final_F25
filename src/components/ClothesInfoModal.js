import React, { useState, useEffect } from "react";
import axios from "axios";

const ClothesInfoModal = ({ onClose, clothesID }) => {
  const [information, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get("http://localhost:3001/clothes");
      setInfo(response.data.filter((item) => item.id === clothesID));
    };
    fetchInfo();
  }, [clothesID]);

  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="rounded-md bg-white w-96 mb-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <h1>Clothes Info</h1>

          {information.map((info) => (
            <div key={info.id}>
              <img
                src={info.image}
                alt={info.clothingtype}
                className="w-48 h-auto mb-4"
              />
              <p>{info.clothingtype}</p>
              <p>{info.color}</p>
              <p>{info.season}</p>
              <p>{info.occasion}</p>
              <p>{info.brand}</p>
              <p>{info.size}</p>
              <p>{info.material}</p>
              <p>{info.pattern}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothesInfoModal;

import { useState } from "react";
import React from "react";
import axios from "axios";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import ImageBGRemoved from "./ClothesImageBGRemover";
import {
  clothingtypeOptions,
  colorOptions,
  seasonOptions,
  occasionOptions,
  brandOptions,
  sizeOptions,
  materialOptions,
  patternOptions,
} from "../option_data/data.ts";

const ClothesCreate = ({ onCreate }) => {
  const [clothingtype, setClothingType] = useState(null);
  const [color, setColor] = useState([]);
  const [season, setSeason] = useState([]);
  const [occasion, setOccasion] = useState([]);
  const [brand, setBrand] = useState(null);
  const [size, setSize] = useState(null);
  const [material, setMaterial] = useState([]);
  const [pattern, setPattern] = useState([]);
  const [imageSelected, setImageSelected] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); //stops page from refreshing
    let imageUrl = "";

    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "clothes_preset");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmjzidsiy/image/upload",
        formData
      );

      imageUrl = ImageBGRemoved({ image: response.data.secure_url });
    }

    const formatValue = (val) =>
      val ? (Array.isArray(val) ? val.map((v) => v.value) : val.value) : "";

    const newClothes = {
      clothingtype: formatValue(clothingtype),
      color: formatValue(color),
      season: formatValue(season),
      occasion: formatValue(occasion),
      brand: formatValue(brand),
      size: formatValue(size),
      material: formatValue(material),
      pattern: formatValue(pattern),
      image: imageUrl,
    };

    //passes value back
    await onCreate(newClothes);
    //Resets All the Values
    setClothingType(null);
    setColor([]);
    setSeason([]);
    setOccasion([]);
    setBrand(null);
    setSize(null);
    setMaterial([]);
    setPattern([]);
    setImageSelected(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="file"
          name="image"
          onChange={(e) => setImageSelected(e.target.files[0])}
        ></input>
        <Select
          className="basic-single pb-4"
          classNamePrefix="select"
          name="Clothing Type"
          options={clothingtypeOptions}
          onChange={(value) => setClothingType(value)}
          value={clothingtype}
        />
        <CreatableSelect
          isMulti
          name="Color"
          options={colorOptions}
          className="basic-multi-select pb-4"
          classNamePrefix="select"
          onChange={(value) => setColor(value)}
          value={color}
        />
        <CreatableSelect
          isMulti
          name="Season"
          options={seasonOptions}
          className="basic-multi-select pb-4"
          classNamePrefix="select"
          onChange={(value) => setSeason(value)}
          value={season}
        />
        <CreatableSelect
          isMulti
          name="Occasion"
          options={occasionOptions}
          className="basic-multi-select pb-4"
          classNamePrefix="select"
          onChange={(value) => setOccasion(value)}
          value={occasion}
        />
        <Select
          className="basic-single pb-4"
          classNamePrefix="select"
          name="Brand"
          options={brandOptions}
          onChange={(value) => setBrand(value)}
          value={brand}
        />
        <Select
          className="basic-single pb-4"
          classNamePrefix="select"
          name="Size"
          options={sizeOptions}
          onChange={(value) => setSize(value)}
          value={size}
        />
        <CreatableSelect
          isMulti
          name="Material"
          options={materialOptions}
          className="basic-multi-select pb-4"
          classNamePrefix="select"
          onChange={(value) => setMaterial(value)}
          value={material}
        />
        <CreatableSelect
          isMulti
          name="Pattern"
          options={patternOptions}
          className="basic-multi-select pb-4"
          classNamePrefix="select"
          onChange={(value) => setPattern(value)}
          value={pattern}
        />
        <button type="submit" className="px-4 py-2 rounded-full bg-neutral-300">
          Create
        </button>
      </form>
    </>
  );
};

export default ClothesCreate;

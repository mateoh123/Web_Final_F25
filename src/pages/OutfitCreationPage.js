import React, { useState, useRef } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { Droppable } from "../components/DropClothes";
import ClothesList from "../components/ClothesList.js";
import ClothesDrawer from "../components/ClothesDrawer.js";
import ClothingImageCard from "../components/ClothingImageCard.js";
import captureScreenshot from "../utils/captureScreenshot.js";

const OutfitCreationPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [droppedItems, setDroppedItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const exportRef = useRef();

  function handleDragStart(event) {
    const clothingData = event.active.data.current;
    setActiveItem(clothingData);
  }

  function handleDragEnd(event) {
    console.log("Drag ended:", event);
    const { active, over } = event;

    if (over && over.id === "droppable") {
      const clothingData = active.data.current;
      console.log("Dropped item data:", clothingData);

      if (!droppedItems.find((item) => item.id === clothingData.id)) {
        setDroppedItems((prev) => [...prev, clothingData]);
      }
    }

    setActiveItem(null);
  }

  function handleDragCancel() {
    setActiveItem(null);
  }

  const handleCaptureAndSave = async () => {
    if (droppedItems.length === 0) {
      alert("Please add some clothes to your outfit first!");
      return;
    }

    setIsSaving(true);

    try {
      const result = await captureScreenshot(
        exportRef.current,
        "outfit",
        droppedItems
      );

      if (result.success) {
        alert("Outfit saved successfully!");
        console.log("Cloudinary URL:", result.cloudinaryUrl);
        console.log("Outfit ID:", result.outfitId);
        // Optionally clear the board after saving
        // setDroppedItems([]);
      }
    } catch (error) {
      alert("Failed to save outfit. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-4 left-1/2 -translate-x-1/2 rounded-md bg-black text-white px-4 py-2 shadow-lg hover:bg-zinc-800 transition z-[50]"
      >
        Open drawer
      </button>

      <div className="grid grid-cols-4 w-full min-h-screen" ref={exportRef}>
        <div className="col-span-4 bg-zinc-400 p-4">
          <h1 className="text-2xl font-bold mb-4">Outfit Board</h1>

          <Droppable id="droppable">
            <div className="p-8 border-2 border-dashed border-gray-600 rounded-lg bg-white/50 min-h-[300px]">
              {droppedItems.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {droppedItems.map((item) => (
                    <ClothingImageCard
                      key={item.id}
                      id={item.id}
                      clothingType={item.clothingtype}
                      image={item.image}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 text-lg text-center">
                  Drop clothes here to create your outfit
                </p>
              )}
            </div>
          </Droppable>
          <button
            onClick={handleCaptureAndSave}
            disabled={isSaving || droppedItems.length === 0}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "💾 Save Outfit to Cloudinary"}
          </button>
        </div>
      </div>

      <ClothesDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-4">Your Clothes</h3>
          <ClothesList
            clothingtypeID="tops"
            isDraggablePage={true}
            cardClick={false}
          />
        </div>

        <button
          onClick={() => setIsDrawerOpen(false)}
          className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Close Drawer
        </button>
      </ClothesDrawer>

      <DragOverlay>
        {activeItem ? (
          <div className="opacity-90 cursor-grabbing">
            <ClothingImageCard
              id={activeItem.id}
              clothingType={activeItem.clothingtype}
              image={activeItem.image}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default OutfitCreationPage;

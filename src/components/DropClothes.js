import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-[400px] h-[400px] border-4 border-dashed border-gray-500 rounded-xl flex items-center justify-center text-lg mt-8 transition-colors duration-200 ${
        isOver ? "bg-green-200" : "bg-gray-100"
      }
      `}
    >
      {props.children}
    </div>
  );
}

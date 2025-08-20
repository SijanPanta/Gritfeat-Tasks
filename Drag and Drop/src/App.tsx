import React, { useState } from "react";

const DragDropContainers: React.FC = () => {
  const [containerA, setContainerA] = useState(["Apple", "Banana", "Cherry"]);
  const [containerB, setContainerB] = useState(["Orange", "Grapes"]);
  const [draggingItem, setDraggingItem] = useState<string | null>(null);
  const [source, setSource] = useState<"A" | "B" | null>(null);

  const handleDragStart = (item: string, src: "A" | "B") => {
    setDraggingItem(item);
    setSource(src);
  };

  const handleDrop = (target: "A" | "B") => {
    if (!draggingItem || !source || source === target) return;

    if (source === "A") {
      setContainerA((prev) => prev.filter((i) => i !== draggingItem));
      setContainerB((prev) => [...prev, draggingItem]);
    } else {
      setContainerB((prev) => prev.filter((i) => i !== draggingItem));
      setContainerA((prev) => [...prev, draggingItem]);
    }

    setDraggingItem(null);
    setSource(null);
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const renderItem = (item: string, src: "A" | "B") => (
    <div
      key={item}
      draggable
      onDragStart={() => handleDragStart(item, src)}
      onDragEnd={() => setDraggingItem(null)}
      className={`p-2 m-2 border rounded cursor-move shadow 
        ${draggingItem === item ? "opacity-50 border-blue-500" : "bg-white"}
      `}
    >
      {item}
    </div>
  );

  return (
    <div className="flex gap-6 p-6">
      <div
        className="w-1/2 min-h-[200px] p-4 border-2  rounded"
        onDragOver={allowDrop}
        onDrop={() => handleDrop("A")}
      >
        <h2 className="font-bold mb-2">Container A</h2>
        {containerA.map((item) => renderItem(item, "A"))}
      </div>

      <div
        className="w-1/2 min-h-[200px] p-4 border-2 rounded"
        onDragOver={allowDrop}
        onDrop={() => handleDrop("B")}
      >
        <h2 className="font-bold mb-2">Container B</h2>
        {containerB.map((item) => renderItem(item, "B"))}
      </div>
    </div>
  );
};

export default DragDropContainers;

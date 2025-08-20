# Drag and Drop Between Two Containers (React + Tailwind)

This project demonstrates how to **drag items between two containers** in React using **HTML5 Drag-and-Drop API**.  
Each container maintains its own state, and when an item is dragged and dropped, it moves from one container to the other.

---

## 🚀 Features
1. **Two containers side by side** (`Container A` and `Container B`).
2. **Independent state** for each container using `useState`.
3. **Drag-and-drop support** using HTML5 events (`draggable`, `onDragStart`, `onDrop`, etc.).
4. **Visual indication**:
   - The item being dragged becomes semi-transparent (`opacity-50`).
   - The dragged item gets a highlighted border.
5. Items are visually distinct with borders, shadows, and spacing.
6. Works with **TailwindCSS** for styling (can also be replaced with plain CSS).

---

## 🛠️ Technologies Used
- React (with Hooks)
- TypeScript (optional, can be plain JS)
- TailwindCSS (for styling)

---

## 📂 Project Structure
src/
│── components/
│ └── DragDropContainers.tsx # Main component
│── App.tsx
│── index.tsx
README.md


---

## ⚡ How It Works
1. **State Management**  
   - `containerA` and `containerB` store the items in each container.  
   - `draggingItem` stores which item is currently being dragged.  
   - `source` stores the container the item came from.  

2. **Dragging**  
   - Items have `draggable` enabled.  
   - On `onDragStart`, we store the item and its source container.  

3. **Dropping**  
   - Containers use `onDragOver` with `preventDefault()` so they accept drops.  
   - On `onDrop`, the item is removed from the source and added to the target container.  

4. **Visual Indication**  
   - While dragging, the item appears faded (`opacity-50`) with a blue border.  

---

## ▶️ Usage

### Install dependencies
```bash
npm install
Run the project
npm run dev
open in browser

Visit http://localhost:5173
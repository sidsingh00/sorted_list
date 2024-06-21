import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper'; 
import DraggableItem from './DraggableItem';
import '../App.css';

const SortableList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const moveItem = useCallback((dragIndex, hoverIndex) => {
    const draggedItem = items[dragIndex];
    setItems(update(items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, draggedItem],
      ],
    }));
  }, [items]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="list-container">
        {items.map((item, index) => (
          <DraggableItem
            key={item}
            index={index}
            id={item}
            text={item}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default SortableList;

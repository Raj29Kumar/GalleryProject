import React, { useState } from "react";
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
  } from "@dnd-kit/core";
  import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
  } from "@dnd-kit/sortable";
  import DragItem from "./DragItem";
import { Sortable } from "./Sortable";
import data from "../data/data";
import PhotoInput from "./PhotoInput";
import Photo from "./Lauoyts/Photo";

const ImageGallery = () => {
    const [items, setItems] = useState(data); 
    const [activeId, setActiveId] = useState(null); 
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  
    const handleDragStart = (event) => {
      setActiveId(event.active.id);
    };
  
    const handleDragEnd = (event) => {
      const { active, over } = event;
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      setActiveId(null);
    };
  
  
    
    const handleDeleteImage = (url) => {
      const updatedItems = items.filter((item) => item !== url);
      setItems(updatedItems);
    };
  
    
    const handleAddPhoto = (url) => {
      setItems((prevItems) => [...prevItems, url]); // Add new URL to items
    };
  
  return (
    <>
      <PhotoInput onAddPhoto={handleAddPhoto} /> 
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Photo>
            {items.map((url, index) => (
              <Sortable
                key={url}
                url={url}
                index={index}
                onDelete={handleDeleteImage}
              />
            ))}
          </Photo>
        </SortableContext>
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <DragItem
              src={activeId}
              index={items.indexOf(activeId)}
              overlay={true}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default ImageGallery;


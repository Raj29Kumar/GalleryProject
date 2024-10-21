import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragItem from "./DragItem";

export const Sortable = (props) => {
  const sortable = useSortable({ id: props.url });

  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: "relative",
    margin: "0",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={props.fadeOut ? "fade-out" : "fade-in"} 
    >
      <DragItem src={props.url} alt={props.url} isDragging={isDragging} />

      <div style={{ position: "relative" }}>
        <button
          style={{
            position: "absolute",
            top: "0px",
            right: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 999,
          }}
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete(props.url);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Sortable;

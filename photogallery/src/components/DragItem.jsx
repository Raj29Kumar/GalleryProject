import React from "react";

const DragItem = React.forwardRef(({ src, style, isDragging, ...props }, ref) => {
    return (
        <div ref={ref} style={style} {...props} className="drag-item">
            <img src={src} alt="Draggable" style={{ opacity: isDragging ? 0.5 : 1 }} />
        </div>
    );
});

export default DragItem;

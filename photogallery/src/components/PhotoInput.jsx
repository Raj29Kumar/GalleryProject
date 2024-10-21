/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PhotoInput = ({ onAddPhoto }) => {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleAddPhoto = () => {
    if (url) {
      onAddPhoto(url);
      setUrl("");
    }
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h1>Photo Gallery</h1>
      <input
        type="text"
        placeholder="Enter Image URL"
        value={url}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPhoto}>Add Photo</button>
    </div>
  );
};

export default PhotoInput;

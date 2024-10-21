/* eslint-disable no-unused-vars */
import React from "react";

const Photo = ({ children }) => {
    return (
       <div className="grid grid-clos-5 gap-50" style={{gap: "30px", marginTop: "10px"}}>
        { children }
       </div>
    );
};

export default Photo;



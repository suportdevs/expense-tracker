import React from "react";

const Label = ({ name, color, percent }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-2 items-center">
        <div
          className="w-2 h-2 py-4 rounded"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <h4 className="text-md">{name}</h4>
      </div>
      <h4 className="text-bold">{Math.round(percent)}%</h4>
    </div>
  );
};

export default Label;

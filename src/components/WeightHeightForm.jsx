// src/components/WeightHeightForm.js
import React from "react";

const WeightHeightForm = ({
  weight,
  height,
  setWeight,
  setHeight,
  onSubmit,
  onClear,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Height (cm)
        </label>
        <input
          type="range"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="100"
          max="250"
          className="mt-1 w-full"
        />
        <span className="text-sm">{height} cm</span>
      </div>

      <div className="space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          Calculate BMI
        </button>

        <button
          onClick={onClear}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default WeightHeightForm;

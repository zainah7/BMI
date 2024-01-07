// src/components/BmiResult.js
import React from "react";

const BmiResult = ({ bmi }) => {
  const getBmiCategory = () => {
    if (bmi < 18.5) {
      return { category: "Underweight", color: "text-blue-500" };
    } else if (bmi < 24.9) {
      return { category: "Normal weight", color: "text-green-500" };
    } else if (bmi < 29.9) {
      return { category: "Overweight", color: "text-yellow-500" };
    } else if (bmi < 34.9) {
      return { category: "Obesity Class I", color: "text-orange-500" };
    } else if (bmi < 39.9) {
      return { category: "Obesity Class II", color: "text-red-500" };
    } else {
      return { category: "Obesity Class III", color: "text-purple-500" };
    }
  };

  const bmiCategory = getBmiCategory();

  return (
    <div className="mt-4">
      <p className={`font-medium ${bmiCategory.color}`}>Your BMI is: {bmi}</p>
      <p className={`text-sm ${bmiCategory.color}`}>
        Category: {bmiCategory.category}
      </p>
    </div>
  );
};

export default BmiResult;

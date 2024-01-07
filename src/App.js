// src/App.js
import React, { useState } from "react";
import WeightHeightForm from "./components/WeightHeightForm";
import BmiResult from "./components/BmiResult";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState(170);
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const clearInputs = () => {
    setWeight("");
    setHeight(170);
    setBmi(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
        <h1 className="text-2xl font-semibold mb-4">BMI Calculator</h1>

        <WeightHeightForm
          weight={weight}
          height={height}
          setWeight={setWeight}
          setHeight={setHeight}
          onSubmit={calculateBMI}
          onClear={clearInputs}
        />

        {bmi && <BmiResult bmi={bmi} />}
      </div>
    </div>
  );
}

export default App;

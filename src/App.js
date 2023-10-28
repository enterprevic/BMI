import * as React from "react";
import "./App.css";
import Slider from "@mui/material-next/Slider";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

function App() {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [BMIStatus, setBMIStatus] = React.useState("Body Mass Index");

  const handleWeightChange = (event, newWeight) => {
    setWeight(newWeight);
    BMICalc(newWeight, height);
  };

  const handleHeightChange = (event, newHeight) => {
    setHeight(newHeight);
    BMICalc(weight, newHeight);
  };

  const BMICalc = (newWeight, newHeight) => {
    const BMI = newWeight / (newHeight / 100) ** 2;
    if (BMI <= 18.5) setBMIStatus("Underweight");
    else if (BMI >= 18.6 && BMI < 24.9) setBMIStatus("Normal Weight");
    else if (BMI >= 25 && BMI < 29.9) setBMIStatus("Overweight");
    else setBMIStatus("Obesity");
  };

  return (
    <div className="container">
      BMI Calculator
      <div className="gender">
        Gender:
        <button>
          Male
          <AiOutlineMan />
        </button>
        <button>
          Female
          <AiOutlineWoman />
        </button>
      </div>
      <div className="sliderBar">
        <p>
          Weight(kg):
          <Slider
            aria-label="Weight"
            defaultValue={80}
            onChange={handleWeightChange}
            max={150}
            step={1}
            valueLabelDisplay="auto"
          />
        </p>
      </div>
      <div className="sliderBar">
        <p>
          Height(cm):
          <Slider
            aria-label="Height"
            defaultValue={80}
            onChange={handleHeightChange}
            max={220}
            step={1}
            valueLabelDisplay="auto"
          />
        </p>
      </div>
      <p>BMI: {BMIStatus}</p>
    </div>
  );
}

export default App;

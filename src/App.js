import React, {useState} from "react";
import RepetitionExercise from "./components/RepetitionExercise/index.js";

const exercise = [
  { name: "Push-Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
]; 

function App() {

  const [selectExercise, setSelectExercise] = useState(null);
  
  return (
    <div>
    {!selectExercise ? (
      <h1>no exercise selected</h1>
      ) : (
          <div>
            <RepetitionExercise />
          </div>
      )
      };
    </div>
  );
};

export default App;

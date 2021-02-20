import { useReducer } from "react";

import { plantReducer, initialValues } from "./utils/reducer/plantReducer";

//context
import PlantContext from "./context/PlantContext";
//component
import PlantCard from "./component/PlantCard";
import "./App.css";

function App() {
  const [plant, dispatch] = useReducer(plantReducer, initialValues);
  return (
    <PlantContext.Provider value={{ plant, dispatch }}>
      <PlantCard />
    </PlantContext.Provider>
  );
}

export default App;

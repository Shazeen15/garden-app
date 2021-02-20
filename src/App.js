import { useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { plantReducer, initialValues } from "./utils/reducer/plantReducer";

//context
import PlantContext from "./context/PlantContext";
//component
import Nav from "./component/Nav";
import Home from "./component/Home";
import PlantCard from "./component/PlantCard";
import AddForm from "./component/AddForm";

function App() {
  const [plant, dispatch] = useReducer(plantReducer, initialValues);
  return (
    <PlantContext.Provider value={{ plant, dispatch }}>
      <div className="app">
        <section>
          <Nav />
        </section>
        <section>
          <Switch>
            <Route path="/add-plant">
              <AddForm />
            </Route>
            <Route path="/plant">
              <PlantCard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </div>
    </PlantContext.Provider>
  );
}

export default App;

import { useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { plantInitialValues } from "./utils/reducer/plantReducer";
import { userInitialValue } from "./utils/reducer/userReducer";
import combinedReducer from "./utils/reducer/combinedReducer";

//context
import PlantContext from "./context/PlantContext";
import UserContext from "./context/UserContext";
//component
import Nav from "./component/Nav";
import Home from "./component/Home";
import PlantCard from "./component/PlantCard";
import AddForm from "./component/AddForm";

function App() {
  const [plant, plantDispatch] = useReducer(
    combinedReducer,
    plantInitialValues
  );
  const [user, userDispatch] = useReducer(combinedReducer, userInitialValue);
  return (
    <PlantContext.Provider value={{ plant, plantDispatch }}>
      <UserContext.Provider value={{ user, userDispatch }}>
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
      </UserContext.Provider>
    </PlantContext.Provider>
  );
}

export default App;

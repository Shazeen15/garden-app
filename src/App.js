import { Switch, Route } from "react-router-dom";
import combinedReducer from "./utils/reducer/combinedReducer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//component
import Nav from "./component/Nav";
import Home from "./component/Home";
import PlantCard from "./component/PlantCard";
import AddForm from "./component/AddForm";

function App() {
  const store = createStore(combinedReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

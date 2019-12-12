import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import {
  priceReducer,
  carReducer,
  additionalFeaturesReducer
} from "../src/actionCreator_actionTypes_ReducersStates/reducers";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const monsterReducer = combineReducers({
  priceR: priceReducer,
  carR: carReducer,
  // carStore: carReducer.features,
  addFeatures: additionalFeaturesReducer
});

const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
    ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <Provider store={store}>
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures  />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </Provider>
    </div>
  );
};

export default App;

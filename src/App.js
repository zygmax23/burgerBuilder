import React from "react";
import BurgerBuilderView from "views/BurgerBuilderView";
import MainTemplate from "templates/MainTemplate";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://burgerbuilder-af764.firebaseio.com/";

function App() {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  );
}

export default App;

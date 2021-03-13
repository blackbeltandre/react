import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import routes from "./Pages/Routes";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
     <br />
      {routeResult || <PageNotFound />}
      </div>
     
   
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import PageNotFound from "../Pages/PageNotFound";
import Home from "./Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";


const routes = {
  "/": () => <Home />,
  "/portfolio": () => <Portfolio />,
  "/contact": () => <Contact />,
  "/about": () => <About />
};

export default routes;

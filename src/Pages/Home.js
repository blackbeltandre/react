import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Portfolio from "./Portfolio";

class Home extends React.Component {
  render() {
    return  <>
     <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="media/assets/img/avataaars.svg" alt="" />
                <h1 class="masthead-heading text-uppercase mb-0">Single Page Application </h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Build by react.js </p>
            </div>
        </header>
     <About/>   
      <Portfolio/>   
        </>;
  }
}
export default Home;
ReactDOM.render(<Home/>, document.getElementById('root'));

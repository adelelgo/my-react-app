import React from "react";
// import { useEffect } from "react";

import { Helmet } from "react-helmet";

import Header from "./site/header";
import Home from "./site/home";
import Features from "./site/features";
import Footer from "./site/footer";
import Support from "./site/support";
import Cta from "./site/cta";
import About from "./site/about";

import favicon1 from "./assets/images/favicon.png";

// import js1 from "./assets/js/tiny-slider.js";
// import js2 from "./assets/js/typewriter.js";
// import js3 from "./assets/js/isotope.min.js";
// import js4 from "./assets/js/wow.min.js";
// import js5 from "./assets/js/main.js";
// import js6 from "./assets/js/menu.js";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <Support />
      <Cta />
      <Footer />

      <Helmet>
        <title>My Title</title>

        <script src="./assets/js/tiny-slider.js" type="text/javascript" />
        <script src="./assets/js/typewriter.js" type="text/javascript" />
        <script src="./assets/js/isotope.min.js" type="text/javascript" />
        <script src="./assets/js/wow.min.js" type="text/javascript" />
        <script src="./assets/js/main.js" type="text/javascript" />
        <script src="./assets/js/menu.js" type="text/javascript" />
      </Helmet>
    </>
  );
}

export default App;

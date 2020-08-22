import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />,
      <Home />,
      <Home2 />,
      <Services />,
      <Footer />
    </div>
  );
}

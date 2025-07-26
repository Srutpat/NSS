// App.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css"; // make sure this contains only global styles

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500); // simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     
        <>
          <Navbar />
          <Outlet /> {/* Current page will be rendered here based on the route */}
        </>
      
    </>
  );
}

export default App;

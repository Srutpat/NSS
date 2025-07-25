// import React, { useState } from "react";
// import Preloader from "./components/Preloader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading && <Preloader onFinish={() => setLoading(false)} />}
//       {!loading && (
//         <div>
//           {/* Actual homepage content goes here */}
//           <h1 style={{ textAlign: "center", marginTop: "40vh" }}>Welcome to NSS Website</h1>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import Preloader from "./components/Preloader";
import HomePage from "./HomePage"; // replace with your actual homepage component
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import './global.css'; // Import global styles

// function App() {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <>
//        <Navbar />
//       '{!loaded && <Preloader onFinish={() => setLoaded(true)} />},
        
//       {loaded && <HomePage />} '

//     </>
//   );
// }

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the page based on current route */}
    </>
  );
}

export default App;
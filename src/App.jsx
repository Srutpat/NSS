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

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onFinish={() => setLoaded(true)} />},
       {loaded && <HomePage />} 

    </>
  );
}

export default App;

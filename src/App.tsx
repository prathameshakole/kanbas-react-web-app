// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import HelloWorld from "./Labs/a3/HelloWorld";
// import Labs from "./Labs";
// import Kanbas from "./Kanbas";
// import { HashRouter } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router";

// function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           <Route path="/"         element={<Navigate to="/Labs"/>}/>
//           <Route path="/hello"    element={<HelloWorld/>}/>
//           <Route path="/Labs/*"   element={<Labs/>}/>
//           <Route path="/Kanbas/*" element={<Kanbas/>}/>
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Kanbas"/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
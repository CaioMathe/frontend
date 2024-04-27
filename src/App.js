import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./Routes";
function App() {

  return (
    <Router>
        <div className="grid grid-cols-10 bg-slate-50">

          <RoutesComponent />
 
      </div>
    </Router>
  );
}

export default App;

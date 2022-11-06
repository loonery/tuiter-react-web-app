import "../src/vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css"
import "../src/vendors/fontawesome/css/all.min.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./components/Labs";
import React from "react";
import Tuiter from "./components/Tuiter";
// lecture note: this function is displaying the content that is shown on the application's webPage
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<Labs/>}></Route>
              <Route path='tuiter/*' element={<Tuiter/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;

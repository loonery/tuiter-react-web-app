import './vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/labs/hello-world.js"
import Labs from "./components/labs/index.js";
import Tuiter from "./components/Tuiter/index.js";

// lecture note: this function is displaying the content that is shown on the application's
// webPage
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/hello" element={<HelloWorld/>}></Route>
              <Route path="/" element={<Labs/>}></Route>
              <Route path="/tuiter" element={<Tuiter/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

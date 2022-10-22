import './vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./components/labs/index.js";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HelloWorld from "./components/labs/hello-world";

// lecture note: this function is displaying the content that is shown on the application's
// webPage
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Labs/>}></Route>
              {/*<Route path="/tuiter/home" element={<HomeScreen/>}></Route>*/}
              <Route path="/tuiter/explore" element={<ExploreScreen/>}></Route>
              <Route path="/hello" element={<HelloWorld/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

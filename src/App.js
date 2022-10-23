import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./components/labs/index.js";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HelloWorld from "./components/labs/hello-world";
import HomeScreen from "./components/Tuiter/HomeScreen";

// lecture note: this function is displaying the content that is shown on the application's
// webPage
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Labs/>}></Route>
              <Route path="/tuiter/home" element={<HomeScreen/>}></Route>
              <Route path="/tuiter/explore" element={<ExploreScreen/>}></Route>
              <Route path="/hello" element={<HelloWorld/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="Container">
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />} />
              <Route path="/employees" element={<ListEmployeeComponent />} />
              <Route
                path="/add-employee/:id"
                element={<CreateEmployeeComponent />}
              />
              {/* <Route
                path="/update-employee/:id"
                element={<UpdateEmployeeComponent />}
              /> */}
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;

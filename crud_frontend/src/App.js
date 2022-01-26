import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="Container">
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;

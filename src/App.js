import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Inventory from "./components/Main/Inventory/Inventory.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* TODO: Switch with Routes to Auth/ or Inventory/ */}
      <Inventory />
      <Footer />
    </div>
  );
}

export default App;

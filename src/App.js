import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Header/Navbar";
import axios from "axios";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer 3257491e1f3acffdaad087dc1db732c4235eedc8dc7265c26b9d2522240674cc",
};

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

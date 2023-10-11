import "./App.css";
import UserRegistration from "./components/UserRegistration";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
      <UserRegistration />
    </div>
  );
}

export default App;

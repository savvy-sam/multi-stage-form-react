import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
//import { Contact } from "./Steps/Contact";
//import { Education } from "./Steps/Education";
//import { About } from "./Steps/About";
//import { Confirm } from "./Steps/Confirm";
import StepperBar from "./Steps/Stepper";
//import HorizontalLinearStepper from "./Steps/Stepper"

export const App = () => {
  return (
    <AppProvider>
      <header>
      < StepperBar/>
      </header>
    </AppProvider>
  );
};
















/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
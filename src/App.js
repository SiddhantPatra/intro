import { useState } from "react"; // imrs
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// imrs
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, alertType) => {
    setAlert({ message: message, alertType: alertType });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "#fcfcfd";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="IntroDemo" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />
      </div>
      <div className="container my-3"><About/></div> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

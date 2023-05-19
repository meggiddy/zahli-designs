import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <>
        {/* <Login /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

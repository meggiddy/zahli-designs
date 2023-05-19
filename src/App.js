import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <>
        {/* <Login /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

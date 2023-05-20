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
import UploadPicture from "./components/UploadPicture";
import ProductLanding from "./components/ProductLanding";

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
          <Route path="/custom" element={<UploadPicture />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<ProductLanding />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

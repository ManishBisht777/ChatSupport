import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Support from "./components/liveSupport/support";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/livesupport" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

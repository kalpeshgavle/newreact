import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CounterPage from "./pages/CounterPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes >

    </>
  );
}

export default App;

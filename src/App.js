import "./App.css";
import React from "react";
import Header from "./component/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./component/AllProducts";
import Footer from "./component/Footer";
import PageNotFound from "./component/PageNotFound";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route
            exact
            path="/products/:productId"
            element={<ProductDetail />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

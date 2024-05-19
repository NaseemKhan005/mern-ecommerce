import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../components/common/Layout";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";

const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routing>
    </Router>
  );
};

export default Routes;

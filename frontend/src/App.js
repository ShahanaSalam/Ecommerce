import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
      </Routes>
      <Container>
        <Routes>
          <Route
            path="/product/:id"
            className="product-screen"
            element={<ProductScreen />}
          />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} exact />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/cart/" element={<CartScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/admin/userList" element={<UserListScreen />} />
          <Route
            path="/admin/productList"
            element={<ProductListScreen />}
            exact
          />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          <Route path="/admin/orderlist" element={<OrderListScreen />} />{" "}
          <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
          <Route
            path="/admin/productList/:pageNumber"
            element={<ProductListScreen />}
            exact
          />
          <Route
            path="search/:keyword/page/:pageNumber"
            element={<HomeScreen />}
            exact
          />
          <Route
            path="/admin/product/:id/edit"
            element={<ProductEditScreen />}
          />
          <Route path="/order/:id" element={<OrderScreen />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;

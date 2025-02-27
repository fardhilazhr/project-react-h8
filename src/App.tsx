import { Route, Routes } from "react-router";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { ProductProvider } from "./providers/ProductProvider";
import { BrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { CartProvider } from "./providers/CartProvider";
export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <ProtectedRoute />
                </MainLayout>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

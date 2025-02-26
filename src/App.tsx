import { Route, Routes } from "react-router";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { ProductProvider } from "./providers/ProductProvider";
import { BrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
  return (
    <ProductProvider>
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
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

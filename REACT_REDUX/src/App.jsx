import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";

// Provider from binding (i.e. react-redux)
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="min-h-screen bg-primary font-mono text-white pb-10">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/:ProductID" element={<ProductPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
      {/* <Toaster position="bottom-center"/> */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#646cff",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;

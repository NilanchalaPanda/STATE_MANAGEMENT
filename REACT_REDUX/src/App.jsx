import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

// Provider from binding (i.e. react-redux)
import { Provider } from "react-redux";
import store from './store/store'

function App() {
  return (
    <div className="min-h-screen bg-primary font-mono text-white">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/:ProductID" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

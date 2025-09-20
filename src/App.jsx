import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <main className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="products" element={<Products />} />
                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="productList" element={<ProductList />} />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </Provider>
  );
}

export default App;

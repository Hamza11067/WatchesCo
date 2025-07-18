import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main className="bg-black px-16 text-white">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Hero />
          <Products />
          <Services />
          {/* <About /> */}
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;

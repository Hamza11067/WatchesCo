import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <main className="bg-black px-16 text-white">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Hero />
          <Products />
        </div>
      </main>
    </>
  );
}

export default App;

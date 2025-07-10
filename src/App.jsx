import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="bg-black px-16 ">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </main>
    </>
  );
}

export default App;

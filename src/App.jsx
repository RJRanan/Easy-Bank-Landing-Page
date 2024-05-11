import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

import "../src/index.css";

function App() {
  return (
    <main className="relative w-screen">
      <Nav />
      <Hero />
      <Services />
    </main>
  );
}

export default App;

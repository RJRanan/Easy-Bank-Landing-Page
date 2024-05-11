import Nav from "./components/Nav";
import Hero from "./sections/Hero";

function App() {
  return (
    <main className="relative">
      <section className="px-4">
        <Nav />
      </section>
      <section className="px-4">
        <Hero />
      </section>
    </main>
  );
}

export default App;

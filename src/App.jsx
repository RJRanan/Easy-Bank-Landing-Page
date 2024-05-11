import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

import "../src/index.css";

function App() {
  return (
    <main className="relative ">
      <section className="px-4">
        <Nav />
      </section>
      <section className=" bg-very-light-gray py-10 px-4 w-screen  pt-24 ">
        <Hero />
      </section>
      <section className="">
        <Services />
      </section>
    </main>
  );
}

export default App;

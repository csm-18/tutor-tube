import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col justify-between">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;

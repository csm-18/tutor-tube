import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col justify-between">
      <Nav />
      <Footer />
    </div>
  );
}

export default Home;

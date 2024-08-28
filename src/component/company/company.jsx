import "./company.css";
import About from "./pages/about";
import Services from "./pages/services";
import Header from "../header/header";
import Footer from "../footer/footer";
function Company() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default Company;

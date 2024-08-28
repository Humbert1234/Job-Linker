import "./company.css";
import About from "./pages/about";
import Services from "./pages/services";
import HeaderIn from "../header/headerin";
import Footer from "../footer/footer";
function CompanyIn() {
  return (
    <div className="App">
      <HeaderIn />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default CompanyIn;

import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return <div>
    <section id="Homepage"><Navbar/></section>
    <section id="Services">Parallax</section>
    <section>Servics</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    
  </div>;
};

export default App;

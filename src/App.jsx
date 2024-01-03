import Theme from "./components/Theme/Theme";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";

function App() {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <Header></Header>
      <Theme></Theme>
      <Navigation></Navigation>
      <About></About>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

import Theme from "./components/Theme/Theme";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex-block justify-center items-center content-center dark:bg-neutral-900">
        <Theme />
        <Navigation />
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

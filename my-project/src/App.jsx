import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Portfolio, Whoami } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#292524",
          minHeight: "100vh",
          // minWidth: "100vw",
        }}
      >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Whoami />
        <Experience />
        <Portfolio />
      </div>
    </BrowserRouter>
  );
};

export default App;

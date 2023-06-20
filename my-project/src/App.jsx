import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Works } from "./components";

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
        <Experience />
        <Works />
      </div>
    </BrowserRouter>
  );
};

export default App;

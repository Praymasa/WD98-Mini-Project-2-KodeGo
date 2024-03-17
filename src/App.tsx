import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { OrderSection } from "./pages/OrderSection";
import { About } from "./pages/About";
import { Navigation } from "./component/Navigation";
import { OrderCartProvider } from "./context/OrderCartContext";
import "./App.css";

function App() {
  return (
    <OrderCartProvider>
      <Navigation />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orderSection" element={<OrderSection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </OrderCartProvider>
  );
}

export default App;

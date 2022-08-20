import "./App.css";
import { CalculatorContainer, Container } from "./components";

import { CalculatorDisplay } from "./components/calculator_display";
import { CalculatorPage } from "./pages/calculator_page";

function App() {
  return (
    <Container>
      <CalculatorPage />
    </Container>
  );
}

export default App;

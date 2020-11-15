import "./App.css";
import Chatbot from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme.js";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <main id="app">
        <Chatbot />
      </main>
    </ThemeProvider>
  );
}

export default App;

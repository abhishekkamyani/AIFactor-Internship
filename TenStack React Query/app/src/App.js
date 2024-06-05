import { Routes, Route } from "react-router-dom";
import AddQuote from "./AddQuote";
import "./App.css";
import QuotesList from "./QuotesList.";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuotesList />} />
      <Route path="/add" element={<AddQuote />} />
    </Routes>
  );
}

export default App;

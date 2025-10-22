import "./App.css";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { MainArea } from "./MainArea.jsx";
import { Footer } from "./Footer.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Header />
      <Sidebar count={count} setCount={setCount} />
      <MainArea count={count} />
      <Footer setCount={setCount} />
    </div>
  );
}

export default App;

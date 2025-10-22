import "./App.css";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Main } from "./MainArea.jsx";
import { Footer } from "./Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

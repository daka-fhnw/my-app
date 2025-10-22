import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Main } from "./MainArea,jsx";
import { Footer } from "./Footer";

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

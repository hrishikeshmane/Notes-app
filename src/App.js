import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

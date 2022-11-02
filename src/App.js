import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import FooterHome from "./components/FooterHome/FooterHome";

function App() {
  return (
    <div className="App">
      <HeaderHome />

      <Outlet />

      <FooterHome/>
    </div>
  );
}

export default App;

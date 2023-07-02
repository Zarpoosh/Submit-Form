import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./components/Background.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <section id="bg">
        <ul id="shape">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

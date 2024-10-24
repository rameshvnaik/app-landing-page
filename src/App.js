import "./App.scss";
import Header from "./components/Header";
import AllDepartment from "./components/info/AllDepartment";
import MainPage from "./components/info/MainPage";
import SubInfo from "./components/info/SubInfo";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App app-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/info" element={<SubInfo />} />
            <Route path="/departments" element={<AllDepartment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
